import { Box, Button, Flex, Heading,Tag,TagLabel,TagLeftIcon,Text } from "@chakra-ui/react";
import React from "react";
import { CgHashtag } from "react-icons/cg";
export const TodoCart = () => {
  return <Box>
    <Text fontSize={"25px"}>The Todo Content</Text>
    <Text fontSize={"25px"}>20/20/25</Text>
    <Button variant={"ghost"}> Progress</Button>
    <Flex>
      <Tag size={"lg"} borderRadius={"full"}>
        <Box background={"#6136FA"}fontWeight={900} padding={"5px"} >
          <CgHashtag color="white"  ></CgHashtag>
        </Box>
      
      <TagLabel>Ccfdsyan</TagLabel>
      </Tag>
    </Flex>

  </Box>;
};
