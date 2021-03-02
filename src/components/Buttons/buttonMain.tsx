import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  outline-style: none;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  width: 169px;
  height: 46px;
  color: var(--gray-dark);
  background: var(--yellow);
  border: 1px solid #fddb00;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

type Props = {
  children: React.ReactChild;
};

const ButtonMain = ({ children }: Props) => <Button type="submit">{children}</Button>;

export default ButtonMain;
