import { useUserContext } from '../context/user_context';

export default function NavBar() {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  console.log(myUser);

  return (
    <div>
      <h1>Nav</h1>
      <button type="button" onClick={loginWithRedirect}>Login</button>
    </div>
  );
}
