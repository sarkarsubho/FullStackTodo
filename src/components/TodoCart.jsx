import {
  Box,
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { CgHashtag } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
// import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteData, updateData } from "../redux/app/action";
import {
  DELETEDATA_SUCCESS,
  UPDATEDATA_SUCCESS,
} from "../redux/app/action.types";

export const TodoCart = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  let toast = useToast();

  // update Subtask

  const handleUpdateSubtask = (id, val) => {
    let sub = data.subTasks;
    let desub = sub.map((e) => (e._id === id ? { ...e, status: val } : e));
    dispatch(updateData({ ...data, subTasks: desub })).then((res) => {
      if (res.status === UPDATEDATA_SUCCESS) {
        toast({
          title: `Subtask Updated Successfully ...`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      } else {
        toast({
          title: `Subtask Updated Unsuccessfully !`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    });
    console.log("updated val", id, val, { ...data, subTasks: desub });
  };

  // Delete Subtask

  const handleDeleteSubtask = (id) => {
    let sub = data.subTasks;
    let desub = sub.filter((e) => e._id !== id);
    dispatch(updateData({ ...data, subTasks: desub })).then((res) => {
      if (res.status === UPDATEDATA_SUCCESS) {
        toast({
          title: `Subtask Deleted Successfull ...`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      } else {
        toast({
          title: `Subtask Deleted Unsuccessfull!`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    });
    console.log(" delete id", id);
  };

  const handleStatus = (val) => {
    if (!val) {
      toast({
        title: `Defaulte value cannot be chosen. choose correct opition !`,
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    } else {
      let updatedData = { ...data, status: val };
      dispatch(updateData(updatedData)).then((res) => {
        if (res.status === UPDATEDATA_SUCCESS) {
          toast({
            title: `Status Updated Successfull.`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-left",
          });
        } else {
          toast({
            title: `Status Updated Unsuccessfull!`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom-left",
          });
        }
      });
    }
    console.log(val);
  };

  // Delete Todo functionality
  const handleDelete = () => {
    console.log("delete clicked");
    dispatch(deleteData(data)).then((res) => {
      if (res.status === DELETEDATA_SUCCESS) {
        toast({
          title: `Todo Deleted Successfully ...`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      } else {
        toast({
          title: `Todo Deleted Unsuccessfully. Unknown error Occored`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    });
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.title}</ModalHeader>
          <ModalCloseButton color={"red"} fontSize={"16px"} />
          <ModalBody pb={6}>{data.description}</ModalBody>
        </ModalContent>
      </Modal>

      <Box
        background={"#3c2981"}
        width={["260px", "350px", "350px"]}
        padding={"20px"}
        borderRadius={"8px"}
      >
        <Text fontSize={"27px"} noOfLines={2} margin={0} padding={0}>
          {data.title}{" "}
        </Text>
        <Text fontSize={["15px", "15px", "20px"]}>
          {" "}
          Created on :- {data.date}
        </Text>
        <Text fontSize={["15px", "15px", "20px"]}>
          {" "}
          Deadline is :- {data.deadline}
        </Text>
        <Button
          colorScheme={"teal"}
          onClick={onOpen}
          float={"right"}
          height={"20px"}
        >
          more Details
        </Button>

        {/* show Status */}

        <Flex
          margin={"17px 0"}
          marginTop={"30px"}
          width={"100%"}
          direction={"column"}
        >
          <Button
            variant={"ghost"}
            _active={{ background: "local" }}
            _hover={{ background: "local" }}
            fontSize={["25px", "30px"]}
            color={
              data.status === "todo"
                ? "red.400"
                : data.status === "inprogress"
                ? "yellow.400"
                : "green.600"
            }
          >
            {" Task is on "}
            {data.status}
          </Button>

          <Box>
            <Select
              placeholder="Change Status"
              size={"xs"}
              paddingTop={"0px"}
              width
              backgroundColor={"white"}
              fontWeight={600}
              color={"black"}
              onChange={(element) => handleStatus(element.target.value)}
              float={"right"}
            >
              <option disabled={data.status === "todo"} value="todo">
                Todo{" "}
              </option>
              <option
                disabled={data.status === "inprogress"}
                value="inprogress"
              >
                Inprogress
              </option>
              <option disabled={data.status === "done"} value="done">
                Done
              </option>
            </Select>
          </Box>
        </Flex>

        <Text fontSize={"20px"} textAlign={"left"} marginBottom={"10px"}>
          {" "}
          # Connected with
        </Text>

        {/* map the Tags */}
        <Flex gap={"10px"} wrap={"wrap"} marginBottom={"20px"}>
          {data.tags.Personal && (
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
              <TagLabel>Personal</TagLabel>
            </Tag>
          )}

          {data.tags.Official && (
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
              <TagLabel>Official</TagLabel>
            </Tag>
          )}

          {data.tags.Others && (
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
              <TagLabel>Others</TagLabel>
            </Tag>
          )}
        </Flex>

        {/* Subtask cart */}
        <Text fontSize={"20px"} textAlign={"left"}>
          # Related Task
        </Text>
        {/* maping subTaskes */}
        <Flex direction={"column"} padding={"0 0 15px 15px"}>
          {/* map subtask here */}
          {data.subTasks.map((e) => (
            <Flex gap={"10px"} alignItems={"center"} key={e.id}>
              <Checkbox
                isChecked={e.status}
                size={"lg"}
                colorScheme={"green"}
                onChange={(element) =>
                  handleUpdateSubtask(e._id, element.target.checked)
                }
              ></Checkbox>
              <Text fontSize={"22px"}> {`${e.text}`}</Text>
              <Button
                leftIcon={<MdDelete color={"red"}></MdDelete>}
                fontSize={"30px"}
                variant={"ghost"}
                _hover={{ background: "local" }}
                onClick={() => handleDeleteSubtask(e._id)}
              ></Button>
            </Flex>
          ))}
        </Flex>

        {/* Delete Task Button */}
        {/* <Flex justifyContent={"space-between"}>
          <Button
            colorScheme={"green"}
            fontSize={"18px"}
            rightIcon={
              <AiFillEdit fontSize={"22px"} color={"white"}></AiFillEdit>
            }
          >
            Edit
          </Button>
          <Button
            colorScheme={"red"}
            fontSize={"18px"}
            rightIcon={<MdDelete fontSize={"23px"} color={"white"}></MdDelete>}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Flex> */}
        <Button
          float={"right"}
          colorScheme={"red"}
          fontSize={"18px"}
          rightIcon={<MdDelete fontSize={"23px"} color={"white"}></MdDelete>}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};
