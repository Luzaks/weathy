import React, { FC, ReactNode } from "react";

import PrimaryDivStyled from "./index.styles";

interface PrimaryDivProps {
  children: ReactNode;
  color?: string;
}

export const PrimaryDiv: FC<PrimaryDivProps> = ({ children, color }) => {
  return <PrimaryDivStyled color={color}>{children}</PrimaryDivStyled>;
};

PrimaryDiv.defaultProps = {
  color: "transparent",
};
