import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/chat">Chat</Link>
      <Link to="/groups">Groups</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
