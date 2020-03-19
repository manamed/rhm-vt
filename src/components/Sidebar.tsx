import React from 'react';
import styled from 'styled-components';
import SidebarNavItem from './SidebarNavItem';
import {
  FaAddressCard,
  FaCreditCard,
  FaHandHoldingUsd,
  FaUserPlus,
  FaUserCircle
} from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

const Sidebar: React.FC<any> = () => {
  const { path, url } = useRouteMatch();
  const { user } = useAuth0();

  return (
    <Container>
      <SideNav>
        <SideNavList>
          {/* <SidebarNavItem to={`${url}/uncaptured`} icon={FaHandHoldingUsd}>
            Uncaptured
          </SidebarNavItem>
          <SidebarNavItem to={`${url}/customers`} icon={FaUserCircle}>
            Customers
          </SidebarNavItem> */}
          <SidebarNavItem to={`${url}/onetimecharge`} icon={FaCreditCard}>
            One-Time Charge
          </SidebarNavItem>
          {/* Admin Only */}
          {/* {user &&
            user['https://www.manamed.com/app_metadata'] &&
            user['https://www.manamed.com/app_metadata'].vtRole === 'admin' && (
              <SidebarNavItem to={`${url}/newcustomer`} icon={FaUserPlus}>
                New Customer
              </SidebarNavItem>
            )} */}
        </SideNavList>
      </SideNav>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  grid-area: sidebar;
  background-color: var(--neutralPrimary);
  color: var(--textSecondary);
  font-size: 0.9rem;
`;
const SideNav = styled.nav`
  padding: 0;
  width: 100%;
  margin: 0;
  color: inherit;
`;

const SideNavList = styled.ul`
  padding: 0;
  width: 100%;
  margin: 0;
  list-style: none;
  color: inherit;
  display: grid;
  grid-template-rows: repeat(4, 60px);
`;
