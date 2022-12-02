import axios from "axios";
import * as types from "./action.types";

export const register = (payload) => (dispatch) => {
  return axios
    .post("https://fullstacktodo-production.up.railway.app/register", payload)
    .then((res) => {
      console.log(res.data);
      return { status: types.REGISTERSUCCESS };
    })
    .catch((er) => {
      console.log("register Error from FE", er.response.data);
      return {
        status: types.REGISTERREJECTED,
        message: er.response.data.message,
      };
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGINREQUEST });
  return axios
    .post("https://fullstacktodo-production.up.railway.app/login", payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.LOGINSUCCESS, payload: res.data });
      return { status: types.LOGINSUCCESS,user:res.data.user };
    })
    .catch((er) => {
      console.log("login Error in FE", er);
      dispatch({ type: types.LOGINREJECTED });
      return { status: types.LOGINREJECTED };
    });
};
