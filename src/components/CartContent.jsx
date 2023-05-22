import CartTotals from './CartTotals';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <>
      <section className="section-center text-center py-14">
        <h2 className="mb-10 text-4xl md:text-5xl font-bold ">Your cart</h2>

        <div className="flex flex-wrap items-center -mx-4">
          {/* Your Cart */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
            {/* Products columns*/}
            <div className="hidden lg:flex w-full">
              <div className="w-full lg:w-3/6 text-center">
                <h4 className="mb-6 font-bold  text-gray-500">Description</h4>
              </div>
              <div className="w-full lg:w-1/6">
                <h4 className="mb-6 font-bold  text-gray-500">Price</h4>
              </div>
              <div className="w-full lg:w-1/6 text-center">
                <h4 className="mb-6 font-bold  text-gray-500">Quantity</h4>
              </div>
              <div className="w-full lg:w-1/6 text-right">
                <h4 className="mb-6 font-bold  text-gray-500">Subtotal</h4>
              </div>
            </div>

            {/* Products rows*/}
            <div className="mb-12  border-t  border-gray-200">
              {cart?.map(item => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>

            <div className="flex justify-between flex-wrap items-center lg:-mb-4">
              <button
                onClick={clearCart}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Clear Cart
                </span>
              </button>

              <Link to="/products">
                <button className="relative inline-block px-4 py-2 font-medium group">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Back to shop
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <CartTotals />
        </div>
      </section>
    </>
  );
};

export default CartContent;
