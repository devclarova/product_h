/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const ContainerWrap = styled.div`
  min-height: 100vh;
  max-width: 60%;
  margin: auto;
`;

function Container({ children }) {
  return <ContainerWrap>{children}</ContainerWrap>;
}

export default Container;
