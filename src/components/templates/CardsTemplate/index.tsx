import React, { FC } from "react";
import { Box } from "@mui/material";

import { PrimaryLoader } from "../../atoms";
import { WeatherCard } from "../../molecules";
import { CardsTemplateProps } from "../../../utils";

export const CardsTemplate: FC<CardsTemplateProps> = ({ data, isLoading }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      {isLoading && <PrimaryLoader />}
      {!isLoading &&
        data.map((item, index) => {
          return <WeatherCard key={index} cityInfo={item} />;
        })}
    </Box>
  );
};
