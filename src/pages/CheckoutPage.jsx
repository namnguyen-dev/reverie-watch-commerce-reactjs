import { PageHero, StripeCheckout, Btn } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      {cart.length < 1 ? (
        <div className="grid place-content-center my-24">
          <div className="text-center text-5xl">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              <Btn name="Fill it" />
            </Link>
          </div>
        </div>
      ) : (
        <StripeCheckout />
      )}
    </main>
  );
};

export default CheckoutPage;
