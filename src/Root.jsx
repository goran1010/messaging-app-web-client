import { useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [user, setUser] = useState(null);
  console.log(user, setUser);
  return (
    <>
      <Outlet context={{ user, setUser }}></Outlet>
    </>
  );
}
export default Root;
