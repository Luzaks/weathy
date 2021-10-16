import React, { FC } from "react";

import StyledBox from "./index.styles";
import { PrimaryBoxProps } from "../../../utils";

export const PrimaryBox: FC<PrimaryBoxProps> = ({ children, sx }) => {
  return <StyledBox sx={sx}>{children}</StyledBox>;
};
