import React from 'react';
import styled from 'styled-components';
import { FaBeer, FaCheckCircle } from 'react-icons/fa';

const Success: React.FC = () => {
  return (
    <Container>
      <Main>
        <Image>
          <FaCheckCircle />
        </Image>
        <Text>{`We've successfully received your payment. We will reach out to you soon with a copy of the paid invoice and information regarding tracking and delivery.`}</Text>
      </Main>
    </Container>
  );
};

export default Success;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const Main = styled.div`
  padding: 2rem;
  max-width: 550px;
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);

  @media (max-width: 1000px) {
    box-shadow: none;
  }
`;

const Text = styled.p``;

const Image = styled.div`
  text-align: center;

  font-size: 130px;
  color: #42c742;
`;
