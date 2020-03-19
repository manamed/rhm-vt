import React from 'react';
import styled from 'styled-components';

const Modal: React.FC = ({ children }) => {
  return (
    <Container>
      <ModalContainer>{children}</ModalContainer>
      <Overlay />
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.3;
`;

const ModalContainer = styled.div`
  padding: 1.8rem;
  background: var(--neutralPrimary);
  border-radius: 4px;
  margin-top: -40vh;
  z-index: 6;
`;
