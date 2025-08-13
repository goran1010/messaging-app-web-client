import { useState } from "react";
import styles from "../styles/SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await fetch(`${VITE_URL}/auth/sign-up`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        navigate("/");
        console.log(result);
      } else {
        console.error(result);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <legend>Create account here: </legend>
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
          <label htmlFor="confirm-password">Confirm Password: </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </main>
  );
}
