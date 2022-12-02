import axios from "axios";
import * as types from "./action.types";

export const getData = (props) => (dispatch) => {
  dispatch({ type: types.GETDATAREQUEST });
  axios
    .get(
      `https://fullstacktodo-production.up.railway.app/todo/user/${props.email}`
    )
    .then((res) => {
      dispatch({ type: types.GETDATASUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((er) => {
      dispatch({ type: types.GETDATAREJECTED });
      console.log("error from get data action ", er);
    });
};

export const postData = (payload) => (dispatch) => {
  dispatch({ type: types.POSTDATA_REQUEST });
  return axios
    .post("https://fullstacktodo-production.up.railway.app/todo/post", payload)
    .then((res) => {
      console.log(res.data);

      return { status: types.POSTDATA_SUCCESS };
    })
    .catch((err) => {
      console.log("error from post data action ", err);
      return { status: types.POSTDATA_REJECTED };
    });
};

export const updateData = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATEDATA_REQUEST });
  axios
    .patch("")
    .then((res) => {})
    .catch((err) => {
      console.log("error from patch data action ", err);
    });
};

export const deleteData = (payload) => (dispatch) => {
  dispatch({ type: types.DELETEDATA_REQUEST });
  axios
    .delete("")
    .then((res) => {})
    .catch((err) => {
      console.log("error from delete data action ", err);
    });
};
