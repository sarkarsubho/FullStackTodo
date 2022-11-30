import * as types from "./action.types";

const initState={
    isLoading:false,
    isError:false,
    todo:[]
}

export const appReducer=(state=initState,{type,payload})=>{
  switch(type){

    default:
      return state
  }
}