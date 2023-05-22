import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PageHero,
  SingleReview,
  Stars,
  Loading,
  Error,
  AddToCart,
} from '../components';
import { single_product_url as url } from '../utils/constants';
import { useProductsContext } from '../context/products_context';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const { name, company, image, description, stock, stars } = product;
  return (
    <>
      <PageHero title={name} product />

      <section className=" py-10 section-center">
        {/* Product details */}
        <div className=" mx-auto flex flex-wrap ">
          <img
            alt="ecommerce"
            className=" w-full h-full sm:w-2/3 sm:h-2/3 lg:w-1/2 lg:h-1/2 object-cover object-center rounded border border-gray-200 "
            src={image?.[0].url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {company}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>

            <Stars stars={stars} />
            <p className="leading-relaxed mt-4">{description}</p>
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>

        {/* Product reviews */}
        <div className="max-w-screen-xl  py-8 mx-auto  ">
          <h2 className="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

          <div className="flex items-center mt-4">
            <p className="text-3xl font-medium">
              {stars}
              <span className="sr-only"> Average review score </span>
            </p>

            <div className="ml-4">
              <Stars stars={stars} />

              <p className="mt-0.5 text-xs text-gray-500">
                Based on 48 reviews
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12">
            <SingleReview />
            <SingleReview />
            <SingleReview />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
