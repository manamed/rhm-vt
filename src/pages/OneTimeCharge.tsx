import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  Fieldset,
  Label,
  Input,
  ErrorMessage,
  FormGrid,
  Checkbox,
  CheckboxLabel,
  Select
} from '../components/ui';
import { useForm } from 'react-hook-form';
import { useAuth0 } from '../contexts/auth0-context';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import { FaCreditCard } from 'react-icons/fa';
import axiosRequest from '../utils/axiosRequest';
import { StripeCardElement } from '@stripe/stripe-js';

type FormData = {
  customerName: string;
  email: string;
  cardName: string;
  description: string;
  invoiceNumbers: string;
  amount: string;
};

const OneTimeCharge: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    mode: 'onBlur'
  });
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth0();
  const [serverError, setServerError] = useState<String | null>(null);
  const [cardElementValid, setCardElementValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [cardElementError, setCardElementError] = useState<String | null>(null);

  // Listen to change event on card element to validate
  const handleElementChange = ({ error, complete }: any) => {
    if (error) {
      setCardElementError(error.message);
      setCardElementValid(false);
    } else if (complete) {
      setCardElementError(null);
      setCardElementValid(true);
    }
  };

  // Main submit function
  const onSubmit = handleSubmit(async data => {
    console.log(process.env.API_URL);
    if (!stripe || !elements) return;

    // Reset server error message
    setServerError(null);

    console.log('Creating payment intent');
    setLoading(true);

    try {
      // Create payment intent -- sends amount
      const paymentIntentResponse = await axiosRequest(
        'post',
        (process.env.API_URL + '/paymentintent') as string,
        {
          company: 'RHM',
          customerName: data.customerName,
          email: data.email,
          amount: Math.round(parseFloat(data.amount) * 100),
          invoiceNumbers: data.invoiceNumbers,
          description: data.description,
          user: 'default'
        }
      );

      console.log('[paymentintentresponse]', paymentIntentResponse);

      // Use payment intent to finish transaction
      const paymentResult = await stripe.confirmCardPayment(
        paymentIntentResponse.data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement) as StripeCardElement,
            billing_details: {
              name: data.cardName
            }
          }
        }
      );

      if (paymentResult.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(paymentResult.error);
        throw new Error(paymentResult?.error?.message || 'Error');
      } else {
        history.push('/terminal/success');
      }
    } catch (err) {
      console.log(err);
      setServerError(err.message);
      setLoading(false);
    }
  });

  return (
    <Wrapper>
      <GridContainer onSubmit={onSubmit}>
        <Card>
          <FormGrid>
            <Fieldset>
              <Label>Customer Name</Label>
              <Input
                name="customerName"
                ref={register({ required: 'Customer name required' })}
              />
              {errors.customerName && (
                <ErrorMessage>{errors.customerName.message}</ErrorMessage>
              )}
            </Fieldset>

            <Fieldset>
              <Label>Email Address</Label>
              <Input
                name="email"
                ref={register({
                  required: 'Email required.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address.'
                  }
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </Fieldset>
            <Fieldset>
              <Label>Transaction Description</Label>
              <Input
                name="description"
                ref={register({
                  required: 'Description required.'
                })}
              />
              {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
              )}
            </Fieldset>
            <Fieldset>
              <Label>Invoice Number(s)</Label>
              <Input name="invoiceNumbers" ref={register()} />
              {errors.invoiceNumbers && (
                <ErrorMessage>{errors.invoiceNumbers.message}</ErrorMessage>
              )}
            </Fieldset>
          </FormGrid>
        </Card>
        <Card>
          <FormGrid>
            <Fieldset>
              <Label>Cardholder Name</Label>
              <Input
                name="cardName"
                ref={register({
                  required: 'Cardholder name required.'
                })}
              />
              {errors.cardName && (
                <ErrorMessage>{errors.cardName.message}</ErrorMessage>
              )}
            </Fieldset>
            <Fieldset>
              <Label>Amount</Label>
              <Input
                type="number"
                step=".01"
                name="amount"
                ref={register({
                  required: 'Amount required.',
                  min: 0
                })}
              />
              {errors.amount && (
                <ErrorMessage>{errors.amount.message}</ErrorMessage>
              )}
            </Fieldset>
            <Fieldset>
              <Label>Card Info</Label>
              <CardElement
                onChange={handleElementChange}
                options={cardElementOptions}
              />
              {cardElementError && (
                <ErrorMessage>{cardElementError}</ErrorMessage>
              )}
            </Fieldset>
            <SubmitButton
              loading={loading}
              disabled={
                !stripe ||
                Object.keys(errors).length > 0 ||
                !cardElementValid ||
                loading
              }
            >
              Submit
            </SubmitButton>
            {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
          </FormGrid>
        </Card>
      </GridContainer>
      {/* <RightSection>
        <FaCreditCard />
      </RightSection> */}
    </Wrapper>
  );
};

export default OneTimeCharge;

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 600px 1fr; */
  width: 100%;
  gap: 9rem;
`;

const cardElementOptions = {
  style: {
    base: {
      fontSize: '19px',
      color: 'lightgray',
      '::placeholder': {
        color: '#d3d3d34a'
      }
    },
    invalid: {
      color: '#ef516e'
    }
  }
};

const GridContainer = styled.form`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: 600px 600px;
  gap: 2.4rem;
  width: 100%;

  .StripeElement {
    border: 1px solid var(--textPrimary);
    padding: 10.5px 1rem;
    height: 43.16px;
  }

  .StripeElement--focus {
    outline: 1px solid white;
  }
`;

const RightSection = styled.div`
  width: 100%;
  color: #ffffff0a;

  svg {
    height: 600px;
    width: auto;
  }
`;

const CompanySelect = styled.div`
  padding: 0 5rem;
`;
