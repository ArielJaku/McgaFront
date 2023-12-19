import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const auth = getAuth();
  console.log(auth)
  signOut(auth);
  localStorage.removeItem('token')
  window.location.href = '/';

  return (
    <div>Logout</div>
  )
}

export default Logout