import { Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { TodoCart } from "../components/TodoCart";

export const Others = () => {
  let { isLoading, isError, allTodo, personalTodo, officialTodo, othersTodo } =
    useSelector((state) => state.app);
  return (<>
 <Heading size="xl" padding={"20px"}> {` Others Todo's `}</Heading>
    <div className="displayData">
      {/* <TodoCart></TodoCart> */}
      {othersTodo.map((todo) => (
        <TodoCart key={todo._id} data={todo}></TodoCart>
      ))}
    </div> </>
  );
};
