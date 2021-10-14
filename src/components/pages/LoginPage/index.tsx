import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "@mui/material";

import { Form } from "../../molecules";
import { PrimaryText } from "../../atoms";

interface LoginPageProps extends RouteComponentProps {
  id: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({ match, history }) => {
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

  const validateInput = async (type: string, input: string) => {
    const localErrors: string[] = [];
    let inputType: string = type === "password" ? "password" : "username";
    let value: string;
    const expression: RegExp = /[^A-Za-z0-9]+/g;

    if (input.length < 6) {
      localErrors.push(`Your ${inputType} must be at least 6 characters`);
    } else {
      if (input.trim() !== input) {
        localErrors.push(`Your ${inputType} should not contain spaces`);
      } else {
        if (!!input.match(expression)) {
          localErrors.push(
            `Your ${inputType} should not contain special characters`
          );
        }
      }
    }
    try {
      if (localErrors.length === 0) {
        value = input;
      } else {
        value = "";
      }
    } catch {
      localErrors.push("Sorry. Something went wrong. Try again.");
      value = "";
    }
    return { hasErrors: localErrors, input: value };
  };

  const handleLoginForm = () => {
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
      xs={12}
      height={"100vh"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <PrimaryText fontSize={64} variant={"span"} content={"Weathy"} />
      <PrimaryText
        fontSize={13}
        variant={"span"}
        content={"Please enter your username and password below"}
      />
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
