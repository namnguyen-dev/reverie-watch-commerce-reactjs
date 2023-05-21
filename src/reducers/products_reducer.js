import { MENU_OPEN, MENU_CLOSE } from '../context/actions';

const products_reducer = (state, action) => {
  // openMenu, closeMenu
  if (action.type === MENU_OPEN) {
    return { ...state, isMenuOpen: true };
  }
  if (action.type === MENU_CLOSE) {
    return { ...state, isMenuOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
