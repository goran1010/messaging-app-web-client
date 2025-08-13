import { useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Outlet context={(user, setUser)}></Outlet>
    </>
  );
}
export default Root;
