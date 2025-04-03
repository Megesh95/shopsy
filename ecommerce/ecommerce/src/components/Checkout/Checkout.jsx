import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { IoCloseOutline } from 'react-icons/io5';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Use the provided Stripe publishable key
const stripePromise = loadStripe('pk_test_51R7vUmChMKB7z3mx2u3Nt1MzkWHLA1d6SDwJm8yZUmmwcKGtqCo5nKFi1LIhoqb1deD2MfaaTTylTxrTm7igQCOf00eW8zLIFN');

const CheckoutForm = ({ onClose, onSuccess }) => {
  const { cartItems, getSubtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    address: {
      line1: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'US',
    },
  });

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create a payment intent when the component mounts
    if (cartItems.length > 0) {
      fetch('http://localhost:4000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: getSubtotal(),
          currency: 'usd',
          metadata: {
            order_id: `order_${Date.now()}`,
            items: JSON.stringify(cartItems.map(item => ({
              id: item.id,
              title: item.title,
              quantity: item.quantity
            })))
          }
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.error('Error creating payment intent:', error);
          setPaymentError('Failed to initialize payment. Please try again.');
        });
    }
  }, [cartItems, getSubtotal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setBillingDetails({
        ...billingDetails,
        [parent]: {
          ...billingDetails[parent],
          [child]: value
        }
      });
    } else {
      setBillingDetails({
        ...billingDetails,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements || !clientSecret) {
      // Stripe.js has not loaded yet or client secret is not available
      return;
    }

    // Validate form
    if (!billingDetails.name || !billingDetails.email || 
        !billingDetails.address.line1 || !billingDetails.address.city || 
        !billingDetails.address.state || !billingDetails.address.postal_code) {
      setPaymentError('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    try {
      const cardElement = elements.getElement(CardElement);
      
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: billingDetails.name,
            email: billingDetails.email,
            address: {
              line1: billingDetails.address.line1,
              city: billingDetails.address.city,
              state: billingDetails.address.state,
              postal_code: billingDetails.address.postal_code,
              country: billingDetails.address.country,
            },
          },
        },
      });

      if (error) {
        setPaymentError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        // Payment successful
        clearCart();
        onSuccess();
      } else {
        setPaymentError('Payment processing failed. Please try again.');
      }
    } catch (error) {
      setPaymentError(error.message || 'An error occurred during payment');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Checkout</h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
        >
          <IoCloseOutline className="h-6 w-6" />
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-md font-medium">Billing Information</h3>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={billingDetails.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={billingDetails.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="address.line1" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Address
          </label>
          <input
            type="text"
            id="address.line1"
            name="address.line1"
            value={billingDetails.address.line1}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="address.city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              City
            </label>
            <input
              type="text"
              id="address.city"
              name="address.city"
              value={billingDetails.address.city}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="address.state" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              State
            </label>
            <input
              type="text"
              id="address.state"
              name="address.state"
              value={billingDetails.address.state}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="address.postal_code" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Postal Code
            </label>
            <input
              type="text"
              id="address.postal_code"
              name="address.postal_code"
              value={billingDetails.address.postal_code}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="address.country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Country
            </label>
            <select
              id="address.country"
              name="address.country"
              value={billingDetails.address.country}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 focus:border-primary focus:outline-none"
              required
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-medium">Payment Information</h3>
        <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3 dark:bg-gray-800">
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      {paymentError && (
        <div className="text-red-500 text-sm">{paymentError}</div>
      )}

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
          <p>Subtotal</p>
          <p>${getSubtotal().toFixed(2)}</p>
        </div>
        <button
          type="submit"
          disabled={!stripe || isProcessing || !clientSecret}
          className={`w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full ${
            (!stripe || isProcessing || !clientSecret) ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
          }`}
        >
          {isProcessing ? 'Processing...' : `Pay $${getSubtotal().toFixed(2)}`}
        </button>
      </div>
    </form>
  );
};

const Checkout = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
        
        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:p-6">
            {isSuccess ? (
              <div className="text-center py-10">
                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Payment successful!</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Thank you for your purchase. Your order has been processed.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <Elements stripe={stripePromise}>
                <CheckoutForm onClose={onClose} onSuccess={handleSuccess} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
