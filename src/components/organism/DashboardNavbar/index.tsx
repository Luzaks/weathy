import React, { FC } from "react";
import { Toolbar } from "@mui/material";

import { PrimaryButton, PrimaryText } from "../../atoms";

interface DashboardNavbarProps {
  handleLogOut: () => void;
}

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
        backgroundColor: "#000",
      }}
    >
      <PrimaryText
        content={"Weathy"}
        variant={"h1"}
        fontSize={26}
        color={"#fff"}
      />
      <PrimaryButton title={"Logout"} onClick={handleLogOut} />
    </Toolbar>
  );
};
