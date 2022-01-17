import React from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState } from "react";
const Login = (props) => {
  const [isValidForm, setIsValidForm] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);

  //handle email changing
  const handleOnChangeEmail = (event) => {
    console.log(`email value changed to ${event.target.value}`);
    setEmailValue(event.target.value);
    if (emailValue.includes("@")) {
      setIsValidEmail(true);
      if (isValidPassword) {
        setIsValidForm(true);
      }
    } else {
      setEmailValue(false);
      setIsValidForm(false);
    }
  };

  //handle password changing
  const handleOnChangePassword = (event) => {
    console.log(`password changed! ${event.target.value}`);
    setPasswordValue(event.target.value);
    if (passwordValue.length >= 8) {
      setIsValidPassword(true);
      if (isValidEmail) {
        setIsValidForm(true);
      }
    } else {
      setIsValidPassword(false);
      setIsValidForm(false);
    }
  };

  //handle validation of log in submission
  const handleOnSubmitForm = (event) => {
    event.preventDefault();
    //validateForm!
    if (!isValidForm) {
      console.log("invalid form!");
      return;
    }
    // lift login state variables.
    props.onLogIn({ email: emailValue, password: passwordValue });
    console.log("form has been submitted");
  };

  //handle validation of email
  const emailValidation = () => {
    if (emailValue.includes("@")) {
      console.log("email is vaild");
      setIsValidEmail(true);

      return; // return immediately as the email was valid
    }
    setIsValidEmail(false);

    console.log("invalid email");
  };

  //handle password validation
  const passwordValidation = (event) => {
    console.log(event.target.value);
    if (event.target.value.length >= 8) {
      console.log("password is valid");
      setIsValidPassword(true);
      return;
    }
    console.log("invalid password!");
    setIsValidPassword(false);
  };
  //handle form verification, form is valid if both the email and password are valid

  return (
    <Card className={classes.login}>
      <form onSubmit={handleOnSubmitForm}>
        <div
          className={`${classes.control} ${
            isValidEmail === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={handleOnChangeEmail}
            onBlur={emailValidation}
          />
        </div>
        <div
          className={`${classes.control} ${
            isValidPassword === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="user-password">Password</label>

          <input
            type="password"
            id="user-password"
            value={passwordValue}
            onChange={handleOnChangePassword}
            onBlur={passwordValidation}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={false}
            // onClick={props.onLogIn}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
