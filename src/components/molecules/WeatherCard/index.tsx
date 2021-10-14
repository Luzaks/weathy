import React, { FC } from "react";
import { Card, Toolbar, Box } from "@mui/material";

import { PrimaryText } from "../../atoms";

interface WeatherCardProps {
  cityInfo: any;
}

export const WeatherCard: FC<WeatherCardProps> = ({ cityInfo }) => {
  const { condition, temp_f, last_updated } = cityInfo.current;
  const { text } = condition;
  const { name } = cityInfo.location;
  return (
    <Card
      variant={"outlined"}
      sx={{
        width: "34%",
        maxWidth: 350,
        minWidth: 300,
        height: "25%",
        maxHeight: 300,
        minHeight: 200,
        margin: 2,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          height: "24px",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        }}
      >
        <PrimaryText
          content={name}
          variant={"h3"}
          fontSize={16}
          color={"#fff"}
        />
      </Toolbar>
      <Box
        sx={{
          width: "100%",
          height: "70%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <PrimaryText
          content={text}
          variant={"h3"}
          fontSize={16}
          color={"#000"}
        />
        <PrimaryText
          content={temp_f}
          variant={"h3"}
          fontSize={22}
          color={"#000"}
        />
        <PrimaryText
          content={`Last update: ${last_updated}`}
          variant={"h3"}
          fontSize={12}
          color={"#000"}
        />
      </Box>
    </Card>
  );
};

WeatherCard.defaultProps = {
  cityInfo: {
    name: "Mexico City",
    condition: "Clear",
    temperature: "70F",
    lastUpdate: "Today",
  },
};
