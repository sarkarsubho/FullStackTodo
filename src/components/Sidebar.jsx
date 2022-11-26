import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { AiTwotoneHome } from "react-icons/ai";
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
          padding={"10px"}
          direction={"column"}
          borderBottom={"2px solid gray"}
          gap={"9px"}
          color={"black"}
        >
          <Flex
            justifyContent={"space-around"}
            overflow={"hidden"}
            // border={"2px"}
            bg={"yellow"}
            borderRadius={"5px"}
            padding={"5px"}
            
            // gap={"60px"}
          >
            {/* <Button colorScheme={"violet"} leftIcon={}>
             
            </Button> */}
             <AiTwotoneHome color="#6e21fd" fontSize={"25px"}></AiTwotoneHome>
             <Text></Text>
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
        
      </Button>
    </Flex>
  );
};
