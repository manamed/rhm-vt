import React, { useEffect, useState } from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import styled from 'styled-components';
import ManamedLogoBlack from '../images/logos/manamed-logo-black.svg';
import ManamedLogoWhite from '../images/logos/manamed-logo-white.svg';
import RubikLogo from '../images/logos/rubik-logo.svg';
import RubikLogoWhite from '../images/logos/rubik-logo-white.svg';
import ProfileArea from './ProfileArea';

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  const { user } = useAuth0();
  const [name, setName] = useState();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  return (
    <Container>
      <Left>
        {theme === 'light' ? (
          <img src={RubikLogoWhite} />
        ) : (
          <img src={RubikLogoWhite} />
        )}
      </Left>
      <Right>
        <ProfileArea />
      </Right>
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
  padding: 0.6rem 1.5rem;

  img {
    height: 100%;
    width: auto;
  }
`;

const Right = styled.div``;
