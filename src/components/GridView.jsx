import GridProduct from './GridProduct';

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-10 place-items-center">
      {products.map((product, index) => (
        <GridProduct product={product} key={index} />
      ))}
    </div>
  );
};

export default GridView;
