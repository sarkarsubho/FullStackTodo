import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
export const Login = () => {

    const handleLogin=(e)=>{
        e.preventDefault();
     console.log("form Submitted")
    }
    
  return (
    <Grid placeItems={"center"} width={"100%"} height={"100%"}>
      <div className={styles.box}>
        <form action="" autoComplete="off" className= {styles.form} onSubmit={(e)=>handleLogin(e)}>
          <Heading className= {styles.heading}>Login</Heading>
          <div className={styles.inputbox}>
            <input className= {styles.input} type="text" required="required" />
            <span>Username</span>
            <i></i>
          </div>
          <div className= {styles.inputbox}>
            <input type="text" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <input className= {styles.input} type="submit" value="Login"  />
          <div className= {styles.redirect}>
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
