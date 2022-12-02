import { Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCart } from "../components/TodoCart";
import { getData } from "../redux/app/action";
import { useEffect } from "react";

export const All = () => {
  let { isLoading, isError, allTodo, personalTodo, officialTodo, othersTodo } =
    useSelector((state) => state.app);
  let { user, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    allTodo.length === 0 && dispatch(getData(user));
  }, []);
  return (
    <>
      <Heading size="xl" padding={"20px"}>
        {" "}
        {`All Todo's are here`}
      </Heading>
      <div className="displayData">
        {/* <TodoCart></TodoCart> */}
        {allTodo.map((todo) => (
          <TodoCart key={todo._id} data={todo}></TodoCart>
        ))}
      </div>
    </>
  );
};
