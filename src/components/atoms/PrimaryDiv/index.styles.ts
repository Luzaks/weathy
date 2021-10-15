import styled from "styled-components";

const PrimaryDivStyled = styled.div`
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  padding: 15px;
`;

export default PrimaryDivStyled;
