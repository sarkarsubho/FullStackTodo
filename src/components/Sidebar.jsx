import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <Flex
      direction={"column"}
      width="20%"
      height={"100vh"}
      justifyContent={"space-between"}
      bg={"#313641"}
    >
      <Flex direction={"column"} textAlign="center">
        <Box
          height={"150"}
          w={"100%"}
          justifyContent="center"
          alignItems={"center"}
          display="flex"
          borderBottom={"2px solid gray"}
        >
          User Details From Api
        </Box>

        <Flex
          padding={"20px 30px"}
          direction={"column"}
          borderBottom={"2px solid gray"}
          gap={"9px"}
        >
          <Flex
            justifyContent={"space-between"}
            padding={"10px"}
            border={"2px"}
            bg={"blue"}
          >
            <Text>All</Text>
            <Text> 4</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            padding={"10px"}
            border={"2px"}
            bg={"blue"}
          >
            <Text>Personal</Text>
            <Text> 1</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            padding={"10px"}
            border={"2px"}
            bg={"blue"}
          >
            <Text>Official</Text>
            <Text> 2</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            padding={"10px"}
            border={"2px"}
            bg={"blue"}
          >
            <Text>Others</Text>
            <Text> 3</Text>
          </Flex>
        </Flex>
      </Flex>

      <Button
        fontSize={"20px"}
        rounded={"0"}
        colorScheme={"red"}
        rightIcon={<FiLogOut fontSize={"25px"}></FiLogOut>}
      >
        Logout
      </Button>
    </Flex>
  );
};
