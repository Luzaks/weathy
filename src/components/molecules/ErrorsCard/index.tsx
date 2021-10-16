import React, { FC } from "react";
import { Card } from "@mui/material";

import { PrimaryText, PrimaryCardContent } from "../../atoms";
import { textColor, textVariantSpan } from "../../../models";
import { CardsProps } from "../../../utils";

export const ErrorsCard: FC<CardsProps> = ({ content }) => {
  return (
    <Card
      sx={{
        boxShadow: 0,
        marginTop: 2,
      }}
    >
      {content.map((item: string, index: number) => {
        return (
          <PrimaryCardContent
            key={index}
            content={
              <PrimaryText
                color={textColor}
                variant={textVariantSpan}
                content={item}
              />
            }
          />
        );
      })}
    </Card>
  );
};
