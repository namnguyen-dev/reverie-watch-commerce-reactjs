import SectionTitle from './SectionTitle';
import Btn from './Btn';
import FeaturedProduct from './FeaturedProduct';
import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import { useProductsContext } from '../context/products_context';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className="flex-col  py-24" id="features">
      <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
        <SectionTitle title="Featured Products" />

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
          {featured.map(product => (
            <FeaturedProduct product={product} key={product.id} />
          ))}
        </div>

        {featured && (
          <div>
            <Link to="/products">
              <Btn name="More products" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
