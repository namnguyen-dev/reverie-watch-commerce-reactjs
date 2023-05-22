import React, { useEffect, useState } from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useNavigate } from 'react-router-dom';
import { useFilterContext } from '../context/filter_context';

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();

  if (filtered_products.length < 1) {
    return (
      <p className="text-center text-xl">
        Sorry, no products matched your search...
      </p>
    );
  }

  if (grid_view === false) {
    return (
      <div>
        <ListView products={filtered_products} />
      </div>
    );
  }

  if (grid_view === true)
    return (
      <div>
        <GridView products={filtered_products} />
      </div>
    );
};

export default ProductList;
