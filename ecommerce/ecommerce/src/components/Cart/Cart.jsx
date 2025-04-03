import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { useCart } from '../../context/CartContext';
import Checkout from '../Checkout/Checkout';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getSubtotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        
        <div className="absolute right-0 top-0 h-full w-full max-w-md transform bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shopping Cart</h2>
              <button
                onClick={onClose}
                className="rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
              >
                <IoCloseOutline className="h-6 w-6" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                            <h3>{item.title}</h3>
                            <p className="ml-4">${item.price ? (item.price * item.quantity).toFixed(2) : '19.99'}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.color}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            >
                              <FaMinus className="h-3 w-3" />
                            </button>
                            <span className="text-gray-500 dark:text-gray-400">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            >
                              <FaPlus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-primary hover:text-primary/80"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
                  <p>Subtotal</p>
                  <p>${getSubtotal().toFixed(2)}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={clearCart}
                    className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-4 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-2 px-4 rounded-full"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Checkout Component */}
      <Checkout isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Cart;
