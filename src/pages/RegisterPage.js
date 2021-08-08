import React, { useState } from "react";
import { Input } from "../components";
import { Title, Button, Page, Container } from "../components/Form.style";
import { api } from "../api/apii";
export const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [firstError, setFirstError] = useState(undefined);
  const [lastError, setLastError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [repeatPasswordError, setRepeatPasswordError] = useState(undefined);

  const handleSubmit = async () => {
    if (firstName === "") {
      setFirstError("First name is required.");
      return;
    }
    if (lastName === "") {
      setLastError("Last name is required.");
      return;
    }
    if (email === "") {
      setEmailError("Email is required.");
      return;
    }
    if (password === "") {
      setPasswordError("Password is required.");
      return;
    }
    if (repeatPassword.value !== password.value) {
      setRepeatPasswordError("Passwords do not match.");
    }

    const { data, error } = await api.register({
      email,
      password,
      firstName,
      lastName,
      repeatPassword,
    });

    if (error !== undefined) {
      alert(error);
      return;
    }
    if (data !== undefined) {
      alert("Register complete.");
      return;
    }
  };

  return (
    <Page>
      <Container>
        <Title>Register</Title>
        <Input
          label="First Name"
          placeholder="Nume"
          type="text"
          value={firstName}
          error={firstError}
          handleOnChange={setFirstName}
        ></Input>
        <Input
          label="Last Name"
          placeholder="Prenume"
          type="text"
          value={lastName}
          error={lastError}
          handleOnChange={setLastName}
        ></Input>
        <Input
          label="Email"
          placeholder="Email address"
          type="email"
          value={email}
          error={emailError}
          handleOnChange={setEmail}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          error={passwordError}
          handleOnChange={setPassword}
        />
        <Input
          label="Repeat Password"
          placeholder="Repeat Password"
          type="password"
          value={repeatPassword}
          error={repeatPasswordError}
          handleOnChange={setRepeatPassword}
        />

        <Button style={{ fontSize: "20px" }} onClick={handleSubmit}>
          Register
        </Button>
      </Container>
    </Page>
  );
};
