import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/LogIn.module.css";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function LogIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await fetch(`${VITE_URL}/auth/log-in`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        console.log(result);
        setUser(result);
      } else {
        console.error(result);
      }
    } catch (err) {
      console.error(err);
      navigate("/");
    }
  }

  return (
    <div className={styles["log-in"]}>
      <form onSubmit={handleSubmit}>
        <legend>Log in here: </legend>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
      <div>
        <p>Don't have an account ?</p>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}
