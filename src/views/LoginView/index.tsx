import React from 'react';

import styled from 'styled-components';
import Login from '../../components/Login/login';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  background-color: var(--yellow);
`;

const LoginView = () => (
  <Wrapper>
    <Login />
  </Wrapper>
);

export default LoginView;
