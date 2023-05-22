import React from 'react';
import ListProduct from './ListProduct';
const ListView = ({ products }) => {
  return (
    <div className="flex-col">
      {products.map((product, index) => (
        <ListProduct product={product} key={index} />
      ))}
    </div>
  );
};

export default ListView;
