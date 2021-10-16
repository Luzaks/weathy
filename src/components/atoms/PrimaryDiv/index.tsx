import React, { FC } from "react";

import PrimaryDivStyled from "./index.styles";
import { PrimaryDivProps } from "../../../utils";

export const PrimaryDiv: FC<PrimaryDivProps> = ({ children, color }) => {
  return <PrimaryDivStyled color={color}>{children}</PrimaryDivStyled>;
};

PrimaryDiv.defaultProps = {
  color: "transparent",
};
