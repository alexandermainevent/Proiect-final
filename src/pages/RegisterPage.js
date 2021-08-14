import React, { useState } from "react";
import { Input } from "../components";
import { Title, Button, Page, Container } from "../components/Form.style";
import { api } from "../api/apii";
import { useHistory } from "react-router-dom";

export const RegisterPage = () => {
  const history = useHistory();

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
    if (repeatPassword === "") {
      setRepeatPasswordError("Password is required.");
      return;
    }

    const request = await api.register({
      firstName,
      lastName,
      email,
      password,
    });
    const { data, error } = request;

    if (error !== undefined) {
      alert(error);
      return;
    }
    if (data !== undefined) {
      alert("Register complete.");
      setTimeout(() => {
        history.push("/login");
      }, 3000);
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
          handleOnChange={(e) => setFirstName(e.target.value)} // REZOLVAREA
        ></Input>
        <Input
          label="Last Name"
          placeholder="Prenume"
          type="text"
          value={lastName}
          error={lastError}
          handleOnChange={(e) => setLastName(e.target.value)}
        ></Input>
        <Input
          label="Email"
          placeholder="Email address"
          type="email"
          value={email}
          error={emailError}
          handleOnChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          error={passwordError}
          handleOnChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Repeat Password"
          placeholder="Repeat Password"
          type="password"
          value={repeatPassword}
          error={repeatPasswordError}
          handleOnChange={(e) => setRepeatPassword(e.target.value)}
        />

        <Button style={{ fontSize: "20px" }} onClick={handleSubmit}>
          Register
        </Button>
      </Container>
    </Page>
  );
};
