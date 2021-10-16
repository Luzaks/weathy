import React, { FC } from "react";
import { Grid, TextField, FormControl } from "@mui/material";

import { PrimaryButton, PrimaryDiv } from "../../atoms";
import { usernameLabel, passwordLabel, loginButton } from "../../../models";

interface FormProps {
  username: string;
  password: string;
  handleOnChangeUser: (e: any) => void;
  handleOnChangePass: (e: any) => void;
  handleSaveForm: () => void;
}

export const Form: FC<FormProps> = ({
  username,
  password,
  handleOnChangeUser,
  handleOnChangePass,
  handleSaveForm,
}) => {
  return (
    <PrimaryDiv>
      <Grid
        container
        spacing={3}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <FormControl>
            <TextField
              label={usernameLabel}
              value={username}
              onChange={handleOnChangeUser}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              label={passwordLabel}
              value={password}
              onChange={handleOnChangePass}
              type={"password"}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <PrimaryButton title={loginButton} onClick={() => handleSaveForm()} />
        </Grid>
      </Grid>
    </PrimaryDiv>
  );
};
