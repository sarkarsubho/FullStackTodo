import { Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCart } from "../components/TodoCart";
import { getData } from "../redux/app/action";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Personal = () => {
  let { isLoading, allTodo, personalTodo } =
    useSelector((state) => state.app);
  let { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    allTodo.length === 0 && dispatch(getData(user));
  }, [allTodo.length, dispatch,user]);

  if (isLoading){
    return <Loader></Loader>
  }

  return (
    <>
      <Heading size="xl" padding={"20px"}>
        {" "}
        {` Personal Todo's `}
      </Heading>
      <div className="displayData">
        
      {allTodo.length === 0 ? (
          <Text fontSize={"20px"}>
            {" "}
            No Todos created yet!{" "}
            <Link to={"/createNew"}>
              <Button colorScheme={"purple"} rightIcon={<AiFillEdit />}>
                Create One
              </Button>
            </Link>
          </Text>
        ) : (
          personalTodo.map((todo) => (
          <TodoCart key={todo._id} data={todo}></TodoCart>
        ))
        )}
        
      </div>{" "}
    </>
  );
};
