import React, { FC } from "react";

import PrimaryButtonStyled from "./index.styles";
import { PrimaryButtonProps } from "../../../utils";

export const PrimaryButton: FC<PrimaryButtonProps> = ({ title, onClick }) => {
  return <PrimaryButtonStyled onClick={onClick}>{title}</PrimaryButtonStyled>;
};

PrimaryButton.defaultProps = {
  title: "Button",
};
