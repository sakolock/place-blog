import { useNavigate } from 'react-router-dom';
import NavLink from "./NavLink"
import { useAuth } from "../../providers/AuthProvider";
import Button from "../Common/Button";

export default function NavBar() {
  const navigate = useNavigate()
  const { user } = useAuth() || {};

  return (
    <nav className="container md:w-9/12 mx-auto">
      <ul className="flex md:flex-row justify-end gap-5 py-2">
        <NavLink to="/" text="Home" />
        <NavLink to="/posts" text="Blog" />
        {user ? (
          <>
            <NavLink to="/posts/create" text="Create a Post" />
            <Button onClick={() => navigate("/logout")}>Logout</Button>
          </>
          ) : (
          <NavLink to="/login" text="Login" reverse />
        )}
      </ul>
    </nav>
  )
}
