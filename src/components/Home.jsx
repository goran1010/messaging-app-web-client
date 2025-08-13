import { Outlet } from "react-router-dom";
import LogIn from "./LogIn";
import styles from "../styles/Home.module.css";

export default function Home({ user, setUser }) {
  if (!user) {
    return (
      <main className={styles["main-log-in"]}>
        <LogIn setUser={setUser} />
      </main>
    );
  }
  return (
    <main>
      <Outlet context={(user, setUser)} />
    </main>
  );
}
