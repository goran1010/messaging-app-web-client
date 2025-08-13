import { Outlet } from "react-router-dom";
import LogIn from "./LogIn";

export default function Home({ user }) {
  if (!user) {
    return (
      <main>
        <LogIn />
      </main>
    );
  }
  return (
    <main>
      <Outlet />
    </main>
  );
}
