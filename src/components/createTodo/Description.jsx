import { Flex, useToast } from "@chakra-ui/react";
import React from "react";
import styles from "./description.module.css";

export const Description = () => {
  const tost = useToast();
  let err = true;
  const showtost = (status) => {
    if (err) {
      tost({
        title: "an errot Occured",
        description: "calling data",
        status: "error",
        duration: 3000,
        isClosable: status,
        position:"bottom-left"
      });
    }
  };
  return (
    // <>
    <div className={styles.main}>
      <input type="text" />
      <input type="date" />
      <textarea></textarea>
      <button onClick={showtost}>show Tost</button>
    </div>
  );
};
{
  /* status and progress */
}
{
  /* <div className={styles.main}>
      <div>
        <Flex>
          <input type="radio" name="progrss" value={"inprogress"}/>
        </Flex>
         
     <input type="radio" name="progrss"/>
     <input type="radio" name="progrss"/>
      </div>
    
     <div>
      <label>Tag</label>
      <input type="checkbox" value="official" />
      <input type="checkbox" value="personal" />
      <input type="checkbox" value="others" />
     </div>
    </div>
    </> */
}
