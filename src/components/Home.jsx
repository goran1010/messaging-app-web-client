import { Outlet, useOutletContext } from "react-router-dom";
import LogIn from "./LogIn";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

export default function Home() {
  const { user, setUser } = useOutletContext();
  if (!user) {
    return (
      <main className={styles["main-log-in"]}>
        <LogIn setUser={setUser} />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Outlet context={{ user, setUser }} />
    </main>
  );
}
