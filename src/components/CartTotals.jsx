import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className="w-full xl:w-4/12 px-4">
      <div className="p-6 md:p-12 bg-tertiary-500 text-secondary-400">
        <h2 className="mb-6 text-4xl font-bold font-heading ">Cart totals</h2>
        <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
          <span className="font-bold text-lg">Subtotal</span>
          <span className="text-xl font-bold font-heading text-secondary-200">
            {formatPrice(total_amount)}
          </span>
        </div>
        <h4 className="mb-2 font-bold text-left text-lg">Shipping</h4>
        <div className="flex mb-2 justify-between items-center">
          <span className="">Next day</span>
          <span className="text-xl font-bold font-heading text-secondary-200">
            {formatPrice(shipping_fee)}
          </span>
        </div>
        <div className="flex mb-10 justify-between items-center">
          <span className="">Shipping to United States</span>
          <span className="text-xl font-bold font-heading ">-</span>
        </div>
        <div className="flex mb-10 justify-between items-center">
          <span className="text-2xl font-bold font-heading ">Order total</span>
          <span className="text-xl font-bold font-heading text-secondary-200">
            {formatPrice(total_amount + shipping_fee)}
          </span>
        </div>
        {myUser ? (
          <Link to="/checkout" className="btn">
            <button className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold font-heading uppercase rounded-md transition duration-200 text-secondary-50">
              proceed to checkout
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold font-heading uppercase rounded-md transition duration-200 text-secondary-50"
            onClick={loginWithRedirect}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
