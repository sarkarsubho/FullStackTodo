import {
  Box,
  Input,
  Button,
  Checkbox,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useReducer } from "react";
import styles from "./createtodo.module.css";

const initialState = {
  title: "",
  description: "",
  date: "",
  subTasks: [],
  status: "todo",
  tags: { Official: false, Personal: false, Others: false },
};

const types = {
  SET_TITLE: "SET_tITLE",
  SET_DECRIPTION: "SET_DECRIPTION",
  SET_DATE: "SET_DATE",
  SET_SUBTASK: "SET_SUBTASK",
  UPDATE_SUBTASK: "UPDATE_SUBTASK",
  TOGGLE_SUBTASK: "TOGGLE_SUBTASK",
  SET_STATUS: "SET_STATUS",
  SET_TAGS: "SET_TAGS",
  RESET: "RESET",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_TITLE:
      return { ...state, title: payload };
    default:
      throw new Error("Action is not Proper.Provide a proper action");
  }
};

export const CreateTodo = () => {
  const [state, dispatchState] = useReducer(reducer, initialState);
  const { title, description, date, subTasks, status, tags } = state;
  console.log(state);
  // const [subTasks, setSubTasks] = useState([]);
  let [subtask, setSubTask] = useState("");

  const handleSubTask = () => {
    console.log("subTask", subtask);
    subTasks.push(subtask);
    // setSubTasks(subTasks);
    setSubTask("");
  };
  return (
    <Box className={styles.main}>
      {/* todo Content */}
      <Flex direction={"column"} gap={"20px"}>
        <Input
          type={"text"}
          placeholder={"Write Your todo"}
          value={title}
          onChange={(e) =>
            dispatchState({ type: types.SET_TITLE, payload: e.target.value })
          }
        ></Input>
        <Input type={"date"}></Input>
        <Textarea placeholder="Description"></Textarea>
      </Flex>

      {/* Add Subtask */}
      <Box>
        <Flex gap={"10px"}>
          <Input
            // value={subtask}
            placeholder="Sub Task"
            // onChange={(e) => setSubTask(e.target.value)}
          ></Input>
          <Button
            bg={"#6136fa"}
            _hover={{ background: "#6e47fa" }}
            onClick={handleSubTask}
          >
            {" "}
            ADD
          </Button>
        </Flex>
        <Flex direction={"column"} gap="10px" padding={"20px"}>
          {subTasks.map((task, i) => {
            return (
              <Flex key={i} gap={"10px"}>
                <Checkbox>{task}</Checkbox>
                <Button colorScheme={"red"}>Delete</Button>
              </Flex>
            );
          })}
        </Flex>
      </Box>

      {/* tag andStatus */}
      <Flex direction={"column"} padding={"20px"} textAlign={"left"} gap="40px">
        <Box>
          <Heading as={"h4"} size="md" marginBottom={"10px"}>
            Status
          </Heading>
          <RadioGroup>
            <Stack direction={"column"}>
              <Radio value={"todo"} size="lg">
                {" "}
                Todo
              </Radio>
              <Radio value={"inprogress"} size="lg">
                {" "}
                InProgress
              </Radio>
              <Radio value={"done"} size="lg">
                {" "}
                Done
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box>
          <Heading as={"h4"} size="md" marginBottom={"10px"}>
            Tags
          </Heading>
          <Stack>
            <Checkbox size="lg" colorScheme="green">
              Personal
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Profetional
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Others
            </Checkbox>
          </Stack>
        </Box>
      </Flex>

      {/* ADD Task Button */}
      <Box>
        <Button
          bg={"#6136fa"}
          _hover={{ background: "#6e47fa" }}
          fontSize={"2xl"}
          letterSpacing={"2px"}
          width={"100%"}
          height={"100%"}
          padding={"50px"}
        >
          ADD TODO
        </Button>
      </Box>
    </Box>
  );
};
