import React from "react";
import { Grid, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./register.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
export const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let {name, value} = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch()
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
            <input
              type="text"
              required="required"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <span>Password</span>
            <i></i>
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
