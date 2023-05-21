import {
  MENU_OPEN,
  MENU_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../context/actions';
import paginator from '../utils/paginator';

const products_reducer = (state, action) => {
  // openMenu, closeMenu
  if (action.type === MENU_OPEN) {
    return { ...state, isMenuOpen: true };
  }
  if (action.type === MENU_CLOSE) {
    return { ...state, isMenuOpen: false };
  }

  // fetch products
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      product => product.featured === true
    );

    const new_products = [...action.payload].slice(10, 18);

    return {
      ...state,
      products_loading: false,
      products: [...action.payload],
      paginated_products: paginator([...action.payload]),
      featured_products: featured_products,
      new_products: new_products,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
