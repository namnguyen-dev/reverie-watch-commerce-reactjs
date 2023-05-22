import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';

const CartBtn = () => {
  const { total_items } = useCartContext();
  const { closeMenu } = useProductsContext();

  return (
    <Link
      to="/cart"
      aria-label="Cart"
      title="Cart"
      className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
      onClick={closeMenu}
    >
      <span className=" items-center relative flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-tertiary-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="absolute -top-3 -right-3 bg-secondary-400 w-4 h-4 flex items-center justify-center rounded-full p-3">
          {total_items}
        </span>
      </span>
    </Link>
  );
};

export default CartBtn;
