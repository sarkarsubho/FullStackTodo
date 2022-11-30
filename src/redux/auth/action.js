import axios from "axios";
import * as types from "./action.types";

export const register = (payload) => (dispatch) => {
  axios
    .post("https://fullstacktodo-production.up.railway.app/", payload)
    .then((res) => {
      console.log(res.data);
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGINREQUEST });
  return axios
    .post("http://localhost:8080/login", payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.LOGINSUCCESS, payload: res.data });
      return { status: types.LOGINSUCCESS };
    })
    .catch((er) => {
      console.log("login Error in FE", er);
      dispatch({ type: types.LOGINREJECTED });
      return { status: types.LOGINREJECTED };
    });
};
