import React, { FC, ReactNode } from "react";

import StyledCardContent from "./index.styles";

interface CardContentProps {
  content: ReactNode;
}

export const PrimaryCardContent: FC<CardContentProps> = ({ content }) => {
  return <StyledCardContent>{content}</StyledCardContent>;
};
