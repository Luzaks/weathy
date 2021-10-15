import styled from "styled-components";
import { Typography } from "@mui/material";

import { primaryColor } from "../../../models";

const TypographyStyled = styled(Typography)(
  ({ color, fontSize }: { color?: any; fontSize?: any }) => ({
    color: color ? color : primaryColor,
    fontSize: fontSize ? fontSize : 14,
  })
);

export default TypographyStyled;
