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
        isLoading:false,
        isError:false,
        allTodo: payload,
        personalTodo: personal,
        officialTodo: official,
        othersTodo: others,
      };

    case types.GETDATAREJECTED:
      return { ...state, isLoading: false, isError: true };
    
    
    //Post data
    case types.POSTDATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
      
    case types.POSTDATA_SUCCESS:
      let updatedTodos=state.allTodo.push(payload);
      const updatedPersonal = updatedTodos.filter((e) => e.tags.Personal === true);
      const updatedOfficial = updatedTodos.filter((e) => e.tags.Official === true);
      const updatedOthers = updatedTodos.filter((e) => e.tags.Others === true);
      return {
        ...state,
        isLoading:false,
        isError:false,
        allTodo: updatedTodos,
        personalTodo: updatedPersonal,
        officialTodo: updatedOfficial,
        othersTodo: updatedOthers,
      };
    case types.POSTDATA_REJECTED:
      return { ...state, isLoading: false, isError: true };
      
    // Updated Data
    case types.UPDATEDATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.UPDATEDATA_SUCCESS:
      let changedTodos=state.allTodo.map((e)=>e._id=== payload._id ? payload:e)
      const changedPersonal = changedTodos.filter((e) => e.tags.Personal === true);
      const changedOfficial = changedTodos.filter((e) => e.tags.Official === true);
      const changedOthers = changedTodos.filter((e) => e.tags.Others === true);
      return {
          ...state,
          isLoading:false,
          isError:false,
          allTodo: changedTodos,
          personalTodo: changedPersonal,
          officialTodo: changedOfficial,
          othersTodo: changedOthers,
        };

    case types.UPDATEDATA_REJECTED:
      return { ...state, isLoading: false, isError: true };


    // Delete Data
    case types.DELETEDATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.DELETEDATA_SUCCESS:
      let deletedTodos=state.allTodo.filter((e)=>e._id !== payload._id)
      const deletedPersonal = deletedTodos.filter((e) => e.tags.Personal === true);
      const deletedOfficial = deletedTodos.filter((e) => e.tags.Official === true);
      const deletedOthers = deletedTodos.filter((e) => e.tags.Others === true);
      return {
          ...state,
          isLoading:false,
          isError:false,
          allTodo: deletedTodos,
          personalTodo: deletedPersonal,
          officialTodo: deletedOfficial,
          othersTodo: deletedOthers,
        };
    case types.DELETEDATA_REJECTED:
      return { ...state, isLoading: false, isError: true };

    
    default:
      return state;
  }
};
