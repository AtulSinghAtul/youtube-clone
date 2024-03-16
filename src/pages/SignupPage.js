import React, { useState } from "react";
import app from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div>
      <label>
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </label>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
