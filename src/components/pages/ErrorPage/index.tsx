import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Grid } from "@mui/material";

import { PrimaryText, PrimaryBox } from "../../atoms";

interface ErrorPageProps extends RouteComponentProps {}

export const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <Grid
      container
      width={"100vw"}
      height={"100vh"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <PrimaryBox
        sx={{
          width: "70%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          borderRadius: 4,
        }}
      >
        <PrimaryText
          content={"Ups..."}
          variant={"h3"}
          fontSize={32}
          color={"#fff"}
        />
        <PrimaryText
          content={"Page not found"}
          variant={"h1"}
          fontSize={64}
          color={"#fff"}
        />
        <Link to={"/"}>
          <PrimaryText
            content={"go to login"}
            variant={"span"}
            fontSize={14}
            color={"#fff"}
          />
        </Link>
      </PrimaryBox>
    </Grid>
  );
};
