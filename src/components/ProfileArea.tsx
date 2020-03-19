import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '../contexts/auth0-context';

interface ProfileAreaProps {}

const ProfileArea: React.FC<ProfileAreaProps> = () => {
  const { user, logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container onClick={() => setMenuOpen(!menuOpen)}>
      <Profile>
        {user && user.name && <Name>{user.name}</Name>}
        {user && user.picture && <Picture src={user.picture} />}
      </Profile>

      {menuOpen && (
        <Dropdown>
          <DropdownItem>
            <DropdownItemButton onClick={() => logout()}>
              Sign Out
            </DropdownItemButton>
          </DropdownItem>
        </Dropdown>
      )}
    </Container>
  );
};

export default ProfileArea;

const Container = styled.div`
  height: 100%;

  width: auto;
  cursor: pointer;
  position: relative;
`;

const Profile = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  gap: 0.8rem;
  padding: 0 2rem;

  :hover {
    outline: 2px dashed var(--themePrimary);
  }
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--textSecondary);
`;

const Picture = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Dropdown = styled.ul`
  position: absolute;
  padding: 0;
  width: 100%;
  margin: 0;
  height: 40;
  top: 100%;
  z-index: 5;
  left: 0;
  background: var(--neutralPrimary);
  border-top: 1px solid var(--neutralDark);
  list-style: none;
`;

const DropdownItem = styled.li`
  padding: 0;
  margin: 0;

  :hover {
    background: black;
  }
`;

const DropdownItemButton = styled.button`
  background: transparent;
  width: 100%;
  padding: 0.6rem 32px;
  border: none;
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-start;
  color: var(--textSecondary);
  font-family: inherit;
`;
