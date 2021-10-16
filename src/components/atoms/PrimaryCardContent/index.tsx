import React, { FC } from "react";

import StyledCardContent from "./index.styles";
import { CardContentProps } from "../../../utils";

export const PrimaryCardContent: FC<CardContentProps> = ({ content }) => {
  return <StyledCardContent>{content}</StyledCardContent>;
};
