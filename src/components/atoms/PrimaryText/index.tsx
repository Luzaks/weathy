import React, { FC } from "react";

import TypographyStyled from "./index.styles";
import { PrimaryTextProps } from "../../../utils";

export const PrimaryText: FC<PrimaryTextProps> = ({
  content,
  variant,
  color,
  fontSize,
}) => {
  return (
    <TypographyStyled color={color} fontSize={fontSize} variant={variant}>
      {content}
    </TypographyStyled>
  );
};

PrimaryText.defaultProps = {
  content: "Lorem Ipsum",
  variant: "span",
};
