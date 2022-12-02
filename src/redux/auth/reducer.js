import { loadData, saveData ,removeData} from "../../utils/localstorage";
import * as types from "./action.types";
const initState = {
  isLoading: false,
  isError: false,
  isAuth: !!loadData("token") || false,
  token: loadData("token") || "",
  user: loadData("user") || {},
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGINREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.LOGINSUCCESS:
      saveData("token", payload.token);
      saveData("user", payload.user);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case types.LOGINREJECTED:
      return { ...state, isLoading: false, isError: true };
    
    case types.LOGOUT:
      removeData("token");
      removeData("user")
      return {...state,isAuth:false,token:"",user:{}}
    default:
      return state;
  }
};
// api returns :- {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmoiOnsiX…4MjN9._NWHMgYdu1RXzMI3KnGdyh_vcoPx4CXIs6DODiNs9-8', user: {…}, message: 'Login successfully'}
