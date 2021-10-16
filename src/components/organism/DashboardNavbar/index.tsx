import React, { FC } from "react";
import { Toolbar } from "@mui/material";

import { PrimaryButton, PrimaryText } from "../../atoms";
import {
  Title,
  logoutButton,
  textVariantHeader,
  textColor,
  primaryColor,
} from "../../../models";
import { DashboardNavbarProps } from "../../../utils";

export const DashboardNavbar: FC<DashboardNavbarProps> = ({ handleLogOut }) => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingX: 1,
        paddingY: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: primaryColor,
      }}
    >
      <PrimaryText
        content={Title}
        variant={textVariantHeader}
        fontSize={26}
        color={textColor}
      />
      <PrimaryButton title={logoutButton} onClick={handleLogOut} />
    </Toolbar>
  );
};
