import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Terminal from './pages/Terminal';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe
const stripePromise = () => {
  console.log(
    'Stripe:',
    process.env.STRIPE_PUBLIC ? 'key loaded' : 'key not loaded'
  );
  return loadStripe(process.env.STRIPE_PUBLIC as string);
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/terminal">
          <Elements stripe={stripePromise()}>
            <Terminal />
          </Elements>
        </Route>
        <Route>
          <Redirect to="/terminal" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
