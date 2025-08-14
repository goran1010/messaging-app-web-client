import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/messages">Messages</Link>
      <Link to="/groups">Groups</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
