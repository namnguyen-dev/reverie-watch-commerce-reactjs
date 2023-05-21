import { Link } from 'react-router-dom';

const FeaturedProduct = ({ product, bg }) => {
  const { id, name, price, image } = product;

  return (
    <Link to={`/products/${id}`} key={id} className="group relative">
      <div
        className={`w-full min-h-80 ${
          bg ? bg : 'bg-neutral-800'
        } aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-primary-700">
            <p>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </p>
          </h3>
        </div>
        <p className="font-medium text-primary-900">${price}</p>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
