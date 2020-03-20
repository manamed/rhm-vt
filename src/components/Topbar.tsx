import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RHMLogo from '../images/logos/rhm-logo.svg';
// import ProfileArea from './ProfileArea';

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  const [name, setName] = useState();
  const [theme, setTheme] = useState('dark');

  return (
    <Container>
      <Left>
        <Logo>RHM</Logo>
      </Left>
      <Right>{/* <ProfileArea /> */}</Right>
    </Container>
  );
};

export default Topbar;

const Container = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  grid-area: topbar;
  background-color: var(--neutralPrimary);
`;

const Name = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Left = styled.div`
  border-right: 1px solid var(--neutralDark);
  width: 280px;
  padding-left: 1rem;

  img {
    height: 100%;
    width: auto;
  }
`;

const Right = styled.div``;

const Logo = styled.div`
  color: gray;
  font-size: 50px;
  line-height: 1;
`;
