import React, { useState } from "react";

import Button from "atoms/Button";
import TextField from "molecules/TextField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [reachAPI, setReactAPI] = useState("");

  const validateEmail = () => {
    !email.includes("@") && email.length
      ? setError((errors) => ({
          ...errors,
          email: "@ symbol expected for email field",
        }))
      : setError((errors) => ({
          ...errors,
        }));
  };

  const validatePassword = () => {
    password.length && password.length < 6
      ? setError((errors) => ({
          ...errors,
          password: "Password must have at least 6 characters",
        }))
      : setError((errors) => ({
          ...errors,
        }));
  };

  const handleLogin = () => {
    if (!Object.keys(error).length) {
      setReactAPI(
        `Do a post request with: 
        { 
          email: ${email},
          password: ${password}
        }`
      );
    }
  };

  return (
    <>
      <TextField
        type="text"
        change={(text) => setEmail(text)}
        validate={validateEmail}
        validationError={error.email}
        placeholder="email@example.com"
      />
      <TextField
        type="password"
        change={(text) => setPassword(text)}
        validate={validatePassword}
        validationError={error.password}
        placeholder="******"
      />
      <Button label="Login" action={handleLogin} type="primary" />

      <p>{reachAPI}</p>
    </>
  );
};

export default Login;
