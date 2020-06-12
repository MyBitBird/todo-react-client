import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:8080/api/";

axios.interceptors.request.use((config) => {
  console.log("loading...");
  return config;
});
axios.interceptors.response.use(
  (response) => {
      toast.dismiss();
    return response;
  },
  (error) => {
    toast.dismiss();
    
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500;

    if (!expectedError) {
      if ((error + "").includes("Network")) toast.error("Network Error");
      else toast.error("UnExpected Error");
    } else if (error.response.status === 404) toast.error("Not Found");
    else if (error.response.status === 500) toast.error("Internal Server");

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
