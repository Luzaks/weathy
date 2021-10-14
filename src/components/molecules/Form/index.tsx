import React, { FC } from "react";
import { Grid, TextField } from "@mui/material";

import { PrimaryButton, PrimaryDiv } from "../../atoms";

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
          <TextField
            label="Username"
            value={username}
            onChange={handleOnChangeUser}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            value={password}
            onChange={handleOnChangePass}
            type={"password"}
          />
        </Grid>
        <Grid item xs={12}>
          <PrimaryButton title={"Login"} onClick={() => handleSaveForm()} />
        </Grid>
      </Grid>
    </PrimaryDiv>
  );
};
