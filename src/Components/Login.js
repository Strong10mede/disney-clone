import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div``;

export default Login;
