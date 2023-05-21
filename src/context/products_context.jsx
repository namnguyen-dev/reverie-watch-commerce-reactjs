import React, { useContext, useEffect, useReducer } from 'react';
import { MENU_OPEN, MENU_CLOSE } from './actions';
import reducer from '../reducers/products_reducer';
const initialState = {
  isMenuOpen: false,
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
