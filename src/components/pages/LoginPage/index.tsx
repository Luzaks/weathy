import React, { useState } from "react";
import { Grid } from "@mui/material";

import { Form, ErrorsCard } from "../../molecules";
import { PrimaryText } from "../../atoms";
import { handleLogin } from "../../../integrations";
import {
  validateInput,
  PageProps,
  HandleLoginProps,
  HandleOnChangeProps,
} from "../../../utils";
import { textVariantSpan, Title, loginSubtitle } from "../../../models";

export const LoginPage: React.FC<PageProps> = ({ history }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const handleOnChangeUser = (e: HandleOnChangeProps) => {
    setUsername(e.target.value);
  };
  const handleOnChangePass = (e: HandleOnChangeProps) => {
    setPassword(e.target.value);
  };

  const handleLoginForm = () => {
    setUsernameErrors([]);
    setPasswordErrors([]);
    validateInput("username", username).then((r: HandleLoginProps) => {
      if (r) {
        const { hasErrors, input } = r;
        if (hasErrors.length > 0) {
          setUsernameErrors(hasErrors);
          setUsername("");
        } else {
          if (!!input) {
            const userInput = input;
            validateInput("password", password).then((r: HandleLoginProps) => {
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
