import { Button, Flex, Grid, Heading, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/auth/action";
import { LOGINREJECTED, LOGINSUCCESS } from "../redux/auth/action.types";
import styles from "./login.module.css";
import { ImEye, ImEyeBlocked } from "react-icons/im";

export const Login = () => {
  const location=useLocation();
  console.log("location from Loginpage",location)
  const [loginData, setLogindata] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginData)).then((res) => {
      if (res.status === LOGINSUCCESS) {
        toast({
          title: "Logedin Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });

        // if the user is logined Successfully redirect him to the homepage
        setTimeout(() => {
          toast({
            title: `Welcome HOME ${res.user.name}`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-left",
          });
          navigate(location?.state ? location.state.from.pathname: "/");
        }, 2000);
      } else if (res.status === LOGINREJECTED) {
        toast({
          title: "Invalid Email or Password !",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    });
    console.log(loginData);
    console.log("form Submitted");
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
          <Heading className={styles.heading}>Login</Heading>
          <div className={styles.inputbox}>
            <input
              className={styles.input}
              name="email"
              type="text"
              required="required"
              onChange={(e) => handleChange(e)}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className={styles.inputbox}>
            <Flex>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required="required"
                  onChange={(e) => handleChange(e)}
                />
                <span>Password</span>
                <i></i>
              </div>
              <Button
                variant={"ghost"}
                _active={{ background: "local" }}
                _hover={{ background: "local" }}
                paddingTop={"20px"}
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <ImEyeBlocked fontSize={"30px"} />
                ) : (
                  <ImEye fontSize={"30px"} />
                )}
              </Button>
            </Flex>
          </div>
          {/* <div className={styles.inputbox}>
            <input
              type="text"
              name="password"
              required="required"
              onChange={(e) => handleChange(e)}
            />
            <span>Conform Password</span>
            <i></i>
          </div> */}
          <input className={styles.input} type="submit" value="Login" />
          <div className={styles.redirect}>
            <p>Don't have a Account ?</p>
            <span>
              <Link to={"/register"}> Register</Link>
            </span>
          </div>
        </form>
      </div>
    </Grid>
  );
};
