import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { PrimaryText, PrimaryBox } from "../../atoms";
import {
  textVariantHeader,
  textVariantHeaderThree,
  textVariantSpan,
  textColor,
  errorPageTitle,
  errorPageLink,
  errorPageSubtitle,
} from "../../../models";
import { PageProps } from "../../../utils";

export const ErrorPage: FC<PageProps> = () => {
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
          content={errorPageSubtitle}
          variant={textVariantHeaderThree}
          fontSize={32}
          color={textColor}
        />
        <PrimaryText
          content={errorPageTitle}
          variant={textVariantHeader}
          fontSize={64}
          color={textColor}
        />
        <Link to={"/"}>
          <PrimaryText
            content={errorPageLink}
            variant={textVariantSpan}
            fontSize={14}
            color={textColor}
          />
        </Link>
      </PrimaryBox>
    </Grid>
  );
};
