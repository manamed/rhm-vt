import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import Topbar from '../components/Topbar';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { Card, Title } from '../components/ui';
import { Switch, Route, Redirect } from 'react-router-dom';
import Success from './Success';
import OneTimeCharge from './OneTimeCharge';

const Terminal: React.FC = () => {
  return (
    <>
      <Container>
        <Topbar />
        <Sidebar />
        <Main>
          <Switch>
            <Route path="/terminal/onetimecharge">
              <Title>One-Time Charge</Title>
              <OneTimeCharge />
            </Route>
            <Route path="/terminal/success">
              <Success />
            </Route>
            <Route path="/terminal">
              <Redirect to="/terminal/onetimecharge" />
            </Route>
          </Switch>
        </Main>
      </Container>
    </>
  );
};

export default Terminal;

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'topbar topbar'
    'sidebar main';
  min-height: 100vh;
`;

const Main = styled.div`
  padding: 2.4rem;
`;
