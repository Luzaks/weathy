import React, { FC, ReactNode } from "react";

import StyledBox from "./index.styles";

interface PrimaryBoxProps {
  children: ReactNode;
  sx?: any;
}

export const PrimaryBox: FC<PrimaryBoxProps> = ({ children, sx }) => {
  return <StyledBox sx={sx}>{children}</StyledBox>;
};
