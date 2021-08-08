import React, { useState } from "react";
import { Input } from "../components";
import { Title, Button, Page, Container } from "../components/Form.style";
import { api } from "../api/apii";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const history = useHistory();
  const handleSubmitLogin = async () => {
    if (email === "") {
      setEmailError("Email is required.");
      return;
    }
    if (password === "") {
      setPasswordError("Password is required.");
      return;
    }

    const request = await api.login({ email, password });
    const { data, error } = request;

    if (error !== undefined) {
      alert(error);
      return;
    }

    if (data !== undefined) {
      history.push("/");
    }
  };

  return (
    <Page>
      <Container>
        <Title>LOG IN</Title>
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
        <Button onClick={handleSubmitLogin}>LOG IN</Button>
      </Container>
    </Page>
  );
};
