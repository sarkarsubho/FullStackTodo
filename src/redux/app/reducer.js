import * as types from "./action.types";

const initState = {
  isLoading: false,
  isError: false,
  allTodo: [],
  personalTodo: [],
  officialTodo: [],
  othersTodo: [],
};

export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    // GET Todo
    case types.GETDATAREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GETDATASUCCESS:
      const personal = payload.filter((e) => e.tags.Personal === true);
      const official = payload.filter((e) => e.tags.Official === true);
      const others = payload.filter((e) => e.tags.Others === true);
      return {
        ...state,
        allTodo: payload,
        personalTodo: personal,
        officialTodo: official,
        othersTodo: others,
      };

    case types.GETDATAREJECTED:
      return { ...state, isLoading: false, isError: true };
    
    
      //

    default:
      return state;
  }
};
