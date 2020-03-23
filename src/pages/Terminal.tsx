import React from 'react';
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
        <Switch>
          <Route path="/terminal/onetimecharge">
            <OneTimeCharge />
          </Route>
          <Route path="/terminal/success">
            <Success />
          </Route>
          <Route path="/terminal">
            <Redirect to="/terminal/onetimecharge" />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default Terminal;

const Container = styled.div`
  min-height: 100vh;
`;
