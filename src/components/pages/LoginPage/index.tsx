import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "@mui/material";

import { Form, ErrorsCard } from "../../molecules";
import { PrimaryText } from "../../atoms";
import { handleLogin } from "../../../integrations";
import { validateInput } from "../../../utils";
import { textVariantSpan, Title, loginSubtitle } from "../../../models";

interface LoginPageProps extends RouteComponentProps {}

export const LoginPage: React.FC<LoginPageProps> = ({ history }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const handleOnChangeUser = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };
  const handleOnChangePass = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const handleLoginForm = () => {
    setUsernameErrors([]);
    setPasswordErrors([]);
    validateInput("username", username).then((r) => {
      if (r) {
        const { hasErrors, input } = r;
        if (hasErrors.length > 0) {
          setUsernameErrors(hasErrors);
          setUsername("");
        } else {
          if (!!input) {
            const userInput = input;
            validateInput("password", password).then((r) => {
              if (r) {
                const { hasErrors, input } = r;
                if (hasErrors.length > 0) {
                  setPasswordErrors(hasErrors);
                  setPassword("");
                } else {
                  if (!!input) {
                    handleLogin(userInput, input);
                    history.push("/dashboard");
                  }
                }
              }
            });
          }
        }
      }
    });
  };

  return (
    <Grid
      container
      height={"100vh"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <PrimaryText fontSize={64} variant={textVariantSpan} content={Title} />
      <PrimaryText
        fontSize={13}
        variant={textVariantSpan}
        content={loginSubtitle}
      />
      <ErrorsCard content={usernameErrors.concat(passwordErrors)} />
      <Form
        username={username}
        password={password}
        handleOnChangeUser={(e) => handleOnChangeUser(e)}
        handleOnChangePass={(e) => handleOnChangePass(e)}
        handleSaveForm={() => handleLoginForm()}
      />
    </Grid>
  );
};
