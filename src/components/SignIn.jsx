import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleChange(event) {
    event.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (existingUser) {
      alert("Login successful! Welcome back, " + existingUser.username);
      setLoggedIn(true);
      window.location.href = "/Home";
    } else {
      const existingEmail = existingUsers.find((user) => user.email === email);
      if (existingEmail) {
        alert("Invalid password. Please try again.");
      } else {
        alert("Email or Password is not valid . Kindly sign up.");
      }
    }
  }

  const userDetails = [{ email: email, password: password }];
  console.log(userDetails);

  return (
    <>
      <div className={styles.form}>
        <form>
          <h3>SignIn Form</h3>
          <div>
            <div className={styles.input_box}>
              <label htmlFor="email_id">Email ID :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputBox}
              />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputBox}
              />
            </div>

            <div className={styles.submit}>
              <button className={styles.login} onClick={handleChange}>
                Login
              </button>
            </div>
            <div className={styles.createAccount}>
              <h6>
                Create new account{" "}
                <li>
                  <Link to="/SignUp">SignUp</Link>
                </li>
              </h6>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
