import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';


const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',

        JSON.stringify({ cart, shipping_fee, total_amount })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {}
  };
  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };
  const handleChange = async event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 3000);
    }
  };
  return (
    <div className="grid place-items-center place-content-center bg-slate-900 m-24 p-12">
      {succeeded ? (
        <article className="bg-slate-600 p-4 text-white">
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article className="bg-slate-600 p-4 text-white">
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(total_amount)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="bg-slate-200 w-96 grid p-12"
      >
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
          className="bg-slate-500 cursor-pointer"
        >
          <span id="button-text">
            {processing ? (
              <div class="flex justify-center items-center">
                <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              'Pay'
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {' '}
            Stripe dashboard.
          </a>{' '}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
