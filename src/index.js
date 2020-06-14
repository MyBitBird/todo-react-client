import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createStore, applyMiddleware,  combineReducers } from "redux";
import tasksReducer from "./store/reducers/tasks";
import globalReducer from "./store/reducers/global";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './components/theme'



const reducers = combineReducers({
  tasks: tasksReducer,
  global: globalReducer
});

const store = createStore(reducers , applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <ToastContainer />
      <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
