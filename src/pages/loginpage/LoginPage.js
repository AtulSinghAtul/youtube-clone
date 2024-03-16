import React, { useState } from "react";
import "./_loginpage.scss";
import app from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSigninUser() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log("sign in success"))
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
      <button onClick={handleSigninUser}>Sign In</button>
    </div>
    // <div className="login">
    //   <div className="login__container">
    //     <h2>Youtube Clone</h2>
    //     <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
    //     <button>Login With google</button>
    //     <p>This Project is made using YOUTUBE DATA API</p>
    //   </div>
    // </div>
  );
};

export default LoginPage;
