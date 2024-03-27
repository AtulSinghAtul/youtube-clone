import React, { useEffect, useState } from "react";
import "./_loginpage.scss";
import { FcGoogle } from "react-icons/fc";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAuthData, removeAuthData } from "../../utility/slices/authSlice";
import { validate } from "../../utility/validate";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignupForm, setIsSignupForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { uid, displayName, email, accessToken } = user;

        console.log(accessToken);
        dispatch(
          addAuthData({
            uid: {
              token: accessToken,
              uid: uid,
              email: email,
              displayName: displayName,
            },
          })
        );

        //* stored user data into session storage
        sessionStorage.setItem("y_uid", uid);
        sessionStorage.setItem("y_token", accessToken);
        sessionStorage.setItem("y_email", email);
        sessionStorage.setItem("y_displayName", displayName);

        navigate("/");
      } else {
        // User is signed out
        dispatch(removeAuthData());
        navigate("/login");
      }
    });
  }, []);

  // if (message !== null) return;

  /////////////////////////////////////////////////////
  function handleSigninUser() {
    const message = validate(email, password);
    setErrorMessage(message);
    //* conditional rendering
    if (message) return;

    // sign in and signup logic
    if (isSignupForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //* This gives you a Google Access Token. You can use it to access the Google API.
          const credential =
            GoogleAuthProvider.credentialFromResult(userCredential);
          const token = credential.accessToken;

          console.log(credential);

          // const token = user.accessToken;
          console.log(token);
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("signInWithEmailAndPassword");
          console.log(userCredential);
          const credential =
            GoogleAuthProvider.credentialFromResult(userCredential);
          const token = credential.accessToken;

          console.log(credential);
          // const user = userCredential?.user;
          // const token = user.accessToken;
          console.log(token);
          // console.log(user.getIdToken());
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  /////////////////////////////////////////////////////
  function handleGoogleAuth() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        console.log(credential);
        // The signed-in user info.
        console.log(token);
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("errorCode:", errorCode);
        console.log("errorMessage:", errorMessage);
        console.log("email:", email);
        console.log("credential:", credential);
        // ...
      });
  }
  /////////////////////////////////////////////////////
  function handleClick() {
    setIsSignupForm(!isSignupForm);
  }

  return (
    <div className="loginForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Sign {isSignupForm ? <span>Up</span> : <span>In</span>}</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        {errorMessage === "Email is not valid" ? (
          <p className="err_messg">{errorMessage}</p>
        ) : (
          ""
        )}

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        {errorMessage === "Password is not valid" ? (
          <p className="err_messg">{errorMessage}</p>
        ) : (
          ""
        )}
        {errorMessage ? (
          <p className="err_messg"> error message: {errorMessage}</p>
        ) : (
          ""
        )}
        <button onClick={handleSigninUser}>
          {isSignupForm ? "Sign Up" : "Sign In"}
        </button>
        <span onClick={handleClick}>
          {isSignupForm ? (
            <span className="signin_text">Sign In Now</span>
          ) : (
            <span className="signin_text">Sign Up Now</span>
          )}
        </span>
      </form>

      <div className="login">
        <div className="login__container">
          <h2>Youtube Clone</h2>
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
          />
          <button onClick={handleGoogleAuth}>
            <FcGoogle size={30} />| Login With google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
