import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "@goran1010/spinner";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

function Root() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  console.log(user);
  return (
    <>
      <Outlet context={{ user, setUser }}></Outlet>
    </>
  );
}
export default Root;
