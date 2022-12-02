import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCart } from "../components/TodoCart";
import { getData } from "../redux/app/action";

export const Home = () => {
  let { user, isAuth } = useSelector((state) => state.auth);
  let { isLoading, isError, allTodo, personalTodo, officialTodo, othersTodo } =useSelector((state) => state.app);
  let toast = useToast();
  const dispatch = useDispatch();
  // if(isAuth){
  //   toast({
  //     title: `Welcome HOME ${user.name}`,
  //     status: "success",
  //     duration: 3000,
  //     isClosable: true,
  //     position: "bottom-left",
  //   });
  // }
  useEffect(() => {
    dispatch(getData(user));
  }, []);
  console.log(user);
  return (
    <Box padding={"20px"} height={"90vh"}>
      <Heading size="xl"> {`Welcome to Home ${user.name}`}</Heading>
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
            <Button colorScheme={"purple"} border={"2px solid yellow"}>
              {" "}
              ALL
            </Button>
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
        </Flex>

        <Box width={"80%"} padding={"40px"}>
          {" "}
          Chart js
        </Box>
      </Flex>
    </Box>
  );
};
