import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import {
  MENU_OPEN,
  MENU_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from './actions';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';

const initialState = {
  isMenuOpen: false,
  products_loading: false,
  products_error: false,
  featured_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMenu = () => {
    dispatch({ type: MENU_OPEN });
  };

  const closeMenu = () => {
    dispatch({ type: MENU_CLOSE });
  };

  const fetchProducts = async url => {
    console.log(url);
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(`${url}`);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
