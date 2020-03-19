import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons/lib/cjs';

interface SidebarNavItemProps {
  to: string;
  icon: IconType;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  to,
  children,
  icon
}) => {
  return (
    <Container>
      <StyledLink
        exact
        to={to}
        activeStyle={{
          background: 'var(--themeTranslucent)',
          color: 'var(--themeTertiary)'
        }}
      >
        <span>{React.createElement(icon)}</span>
        {children}
      </StyledLink>
    </Container>
  );
};

export default SidebarNavItem;

const Container = styled.li`
  height: 100%;
`;
const StyledLink = styled(NavLink)`
  padding-left: 1.5rem;
  height: 100%;
  color: inherit;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;

  :hover {
    background: black;
    color: inherit;
  }

  svg {
    height: 18px;
    width: auto;
  }

  span {
    margin-right: 0.8rem;
  }
`;
