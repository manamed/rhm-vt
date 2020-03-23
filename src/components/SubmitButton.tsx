import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import { WaveLoading } from 'react-loadingg';

interface SubmitButtonProps {
  loading: boolean;
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  loading,
  disabled
}) => {
  return (
    <Button disabled={disabled}>
      {loading ? <WaveLoading color="white" size="small" /> : children}
    </Button>
  );
};

export default SubmitButton;

const Button = styled.button`
  margin-top: 22px;
  border: none;
  color: white;
  background: var(--themePrimary);
  height: 43px;
  position: relative;
  border-radius: 2px;
  font-weight: 600;
  font-size: 15px;

  :hover {
    background: var(--themeSecondary);
  }
`;
