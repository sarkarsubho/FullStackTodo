import {
  Box,
  Button,
  Checkbox,
  Flex,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CgHashtag } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

export const TodoCart = () => {
  return (
    <Box
      background={"#3c2981"}
      width={"350px"}
      padding={"20px"}
      borderRadius={"8px"}
    >
      <Text fontSize={"27px"} noOfLines={2} margin={0} padding={0}>The Todo Content the Todo content is bigger now and i have to detect it</Text>
      <Text fontSize={"22px"}> Created on :- 20/02/25</Text>
      <Text fontSize={"22px"}> Deadline is :- 25/02/25</Text>
      <Button
        variant={"ghost"}
        _hover={{ background: "local" }}
        fontSize={"30px"}
        color={"yellow.400"}
        margin={"25px 0"}
      >
        {" Task is in "}
        Progress
      </Button>
      <Text fontSize={"22px"} textAlign={"left"} marginBottom={"10px"}>
        {" "}
        # Connected with
      </Text>

      {/* map the Tags */}
      <Flex gap={"10px"} wrap={"wrap"} marginBottom={"20px"}>
        {/* map function */}

        <Tag size={"lg"} borderRadius={"full"}>
          <Box
            background={"#6136FA"}
            fontWeight={900}
            padding={"5px"}
            borderRadius={"full"}
            marginRight={"5px"}
            marginLeft={"-9px"}
          >
            <CgHashtag color="white"></CgHashtag>
          </Box>
          <TagLabel>Ccfdsyan</TagLabel>
        </Tag>
        <Tag size={"lg"} borderRadius={"full"}>
          <Box
            background={"#6136FA"}
            fontWeight={900}
            padding={"5px"}
            borderRadius={"full"}
            marginRight={"5px"}
            marginLeft={"-9px"}
          >
            <CgHashtag color="white"></CgHashtag>
          </Box>
          <TagLabel>Ccfdsyan</TagLabel>
        </Tag>
        <Tag size={"lg"} borderRadius={"full"}>
          <Box
            background={"#6136FA"}
            fontWeight={900}
            padding={"5px"}
            borderRadius={"full"}
            marginRight={"5px"}
            marginLeft={"-9px"}
          >
            <CgHashtag color="white"></CgHashtag>
          </Box>
          <TagLabel>Ccfdsyan</TagLabel>
        </Tag>
      </Flex>

      {/* Subtask cart */}
      <Text fontSize={"22px"} textAlign={"left"}>
        # Related Task
      </Text>
      {/* maping subTaskes */}
      <Flex direction={"column"} padding={"0 0 15px 15px"}>
        {/* map subtask here */}
        <Flex gap={"10px"} alignItems={"center"}>
          <Checkbox
            // checked={task.status}
            size={"lg"}
            colorScheme={"green"}
            // onChange={() =>
            //   dispatchState({
            //     type: types.TOGGLE_SUBTASK,
            //     payload: task.id,
            //   })
            // }
          ></Checkbox>
          <Text fontSize={"22px"}>{"task.text"} </Text>
          <Button
            leftIcon={<MdDelete color={"red"}></MdDelete>}
            fontSize={"30px"}
            variant={"ghost"}
            _hover={{ background: "local" }}
            // onClick={() =>
            //   dispatchState({
            //     type: types.UPDATE_SUBTASK,
            //     payload: task.id,
            //   })
            // }
          ></Button>
        </Flex>
      </Flex>

      {/* Delete Task Button */}
      <Flex justifyContent={"space-between"}>
      <Button
          colorScheme={"green"}
          fontSize={"18px"}
          rightIcon={<AiFillEdit fontSize={"22px"} color={"white"}></AiFillEdit>}
        >
          Edit
        </Button>
        <Button
          colorScheme={"red"}
          fontSize={"18px"}
          rightIcon={<MdDelete  fontSize={"23px"}  color={"white"}></MdDelete>}
        >
          Delete
        </Button>
        
      </Flex>
      {/* <Box textAlign={"right"}>
        <Button
          colorScheme={"red"}
          fontSize={"18px"}
          // rightIcon={<MdDelete color={"white"}></MdDelete>}
        >
          Delete Task
        </Button>
      </Box> */}
    </Box>
  );
};
