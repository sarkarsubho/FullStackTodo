import React from "react";
import { Button, Flex, Grid, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/action";
import { REGISTERREJECTED, REGISTERSUCCESS } from "../redux/auth/action.types";
import { ImEye ,ImEyeBlocked} from "react-icons/im";

export const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword,setShowPassword]=useState(false);

  const handleShowPassword=()=>{
    setShowPassword(!showPassword);
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(register(registerData)).then((res) => {
      if (res.status === REGISTERSUCCESS) {
        toast({
          title: "Registered Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });

        // if the user is logined Successfully redirect him to the homepage
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (res.status === REGISTERREJECTED) {
        toast({
          title: `${res.message} ! Please check your data & enter correctly.`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    });
    console.log("form Submitted", registerData);
  };

  return (
    <Grid placeItems={"center"} width={"90%"} height={"100%"}>
      <div className={styles.box}>
        <form
          action=""
          autoComplete="off"
          className={styles.form}
          onSubmit={(e) => handleLogin(e)}
        >
          <Heading className={styles.heading}>Register</Heading>
          <div className={styles.inputbox}>
            <input
              className={styles.input}
              type="text"
              name="name"
              required="required"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>User Name</span>
            <i></i>
          </div>

          <div className={styles.inputbox}>
            <input
              type="email"
              required="required"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>Email</span>
            <i></i>
          </div>

          <div className={styles.inputbox}>
            <Flex>
              <div>
                <input
                  type={showPassword ? "text":"password"}
                  required="required"
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span>Password</span>
                <i></i>
              </div>
              <Button variant={"ghost"} _active={{background:"local"}} _hover={{background:"local"} } paddingTop={"20px"} onClick={handleShowPassword} >
                {
                  showPassword ? <ImEyeBlocked fontSize={"30px"}/>:<ImEye fontSize={"30px"} />
                }
              </Button>
            </Flex>
          </div>

          <div className={styles.inputbox}>
            <input
              type="text"
              required="required"
              name="phone"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>Mobile</span>
            <i></i>
          </div>

          <input className={styles.input} type="submit" value="Register" />
          <div className={styles.redirect}>
            <p>Already have a Account ?</p>
            <span>
              <Link to={"/login"}> Login</Link>
            </span>
          </div>
        </form>
      </div>
    </Grid>
  );
};
