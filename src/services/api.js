import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/actions/global";
import Loading from "./../components/loading/index";
import React from "react";

export const ApiLoading = () => {
  axios.defaults.baseURL = "http://localhost:8080/api/";

  const dispatch = useDispatch();
  axios.interceptors.request.use((config) => {
    dispatch(setLoading(true));
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      toast.dismiss();
      dispatch(setLoading(false));
      return response;
    },
    (error) => {
      dispatch(setLoading(false));
      toast.dismiss();

      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500;

      if (expectedError) {
        if (error.response.status === 400)
          toast.error(`Invalid Data ${error.response.data}`);
        if (error.response.status === 404) toast.error(`Not Found`);
        else if (error.response.status === 500) toast.error("Internal Server");
      } else {
        if ((error + "").includes("Network")) toast.error("Network Error");
        else toast.error("UnExpected Error");
      }

      return Promise.reject(error);
    }
  );

  return <Loading />;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  ApiLoading: ApiLoading,
};
