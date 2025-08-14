import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

function Root() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(`${VITE_URL}/auth/me`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });
      const currentUser = await response.json();
      if (response.ok) {
        setUser(currentUser);
      } else {
        setUser(null);
        console.error(response);
      }
    }
    getUser();
  }, []);
  return (
    <>
      <Outlet context={{ user, setUser }}></Outlet>
    </>
  );
}
export default Root;
