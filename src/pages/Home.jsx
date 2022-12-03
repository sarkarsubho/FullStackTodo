import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { getData } from "../redux/app/action";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Home = () => {
  let { user } = useSelector((state) => state.auth);
  let { isLoading, isError, allTodo, personalTodo, officialTodo, othersTodo } =
    useSelector((state) => state.app);
  let toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    allTodo.length === 0 && dispatch(getData(user));
  }, [allTodo.length, dispatch, user]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    toast({
      title: "Something Went Wrong !",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "bottom-left",
    });
    return (
      <Heading size="md" padding={"20px"} color={"red.400"}>
        {" "}
        Somethong Went Wrong...
      </Heading>
    );
  }

  console.log(allTodo);
  return (
    <Box padding={"20px"} height={"90vh"}>
      <Heading size="xl"> {`Welcome to Home ${user.name}`} </Heading>
      <Flex
        justifyContent={"space-around"}
        height={"100%"}
        alignItems={"center"}
        direction={["column", "column", "row", "row"]}
      >
        <Flex
          direction={"column"}
          gap={"20px"}
          paddingTop={"50px"}
          width={"80%"}
          height={"100%"}
        >
          <Flex width={"230px"} justifyContent={"space-between"}>
            <Button colorScheme={"purple"}> ALL</Button>
            <Button minWidth={"60px"} colorScheme={"teal"}>
              {allTodo.length}
            </Button>
          </Flex>

          <Flex width={"230px"} justifyContent={"space-between"}>
            <Button colorScheme={"purple"}> PERSONAL</Button>
            <Button minWidth={"60px"} colorScheme={"teal"}>
              {personalTodo.length}
            </Button>
          </Flex>
          <Flex width={"230px"} justifyContent={"space-between"}>
            <Button colorScheme={"purple"}> OFFICIAL</Button>
            <Button minWidth={"60px"} colorScheme={"teal"}>
              {officialTodo.length}
            </Button>
          </Flex>
          <Flex width={"230px"} justifyContent={"space-between"}>
            <Button colorScheme={"purple"}> OTHERS</Button>
            <Button minWidth={"60px"} colorScheme={"teal"}>
              {othersTodo.length}
            </Button>
          </Flex>
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
            ""
          )}
        </Flex>

        <Box width={"80%"} padding={"40px"}>
          {" "}
          Chart js
        </Box>
      </Flex>
    </Box>
  );
};
