import { useUserContext } from '../context/user_context';
import { useProductsContext } from '../context/products_context';


export default function NavBar() {
  const { isMenuOpen, openMenu, closeMenu } = useProductsContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  console.log(myUser);
  console.log(isMenuOpen);

  return (
    <div>
      <h1>Nav</h1>
      <button type="button" onClick={loginWithRedirect}>
        Login
      </button>
    </div>
  );
}
