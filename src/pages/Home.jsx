import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { TodoCart } from "../components/TodoCart";

export const Home = () => {
  let {user,isAuth} =useSelector((state)=>state.auth);
  let toast=useToast();
  if(isAuth){
    toast({
      title: `Welcome HOME ${user.name}`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-left",
    });
  }
  console.log(user)
  return <div>
    <TodoCart></TodoCart>
  </div>;
};
