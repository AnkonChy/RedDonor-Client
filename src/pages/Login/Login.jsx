import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import auth from "../../firebase/firebase.config";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(email, password);
  //   };

  const handleSignOut = () => {
    // signOut(auth)
    //   .then(() => {
    //      console.log('sign out');
    //      setUser(null)
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    setUser(null);
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        if (!result.user.emailVerified) {
          // setError("Please verify you email address");
          console.log("not varified");
          return;
        } else {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        setUser(null);
      });
  };

  const handleForgetPassword = () => {
    console.log(email);
    if (!email) {
      console.log("vai email de");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Reset email sent, please check your email");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <Helmet>
        <title>RedDonor | Login</title>
      </Helmet>
      {/* <button
        onClick={handleSignOut}
        className="btn border-pink-600 bg-red-600 mt-4 text-white"
      >
        Sign Out
      </button> */}
      {/* {user && (
        <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )} */}
      <div className="bg-base-100 w-full max-w-sm shadow-2xl">
        <h1 className="text-4xl font-semibold text-center pt-10">Login Page</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="text-base">Email</label>
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input"
              placeholder="Email"
            />
            <div className="relative">
              <label className="text-base">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-6 top-8 text-base"
              >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>
            </div>
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn border-pink-600 bg-red-600 mt-4 text-white"
            >
              Login
            </button>
          </form>

          {loginError && <p>{loginError}</p>}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <button className="btn" onClick={handleGoogleSignIn}>
            <img
              src="https://img.icons8.com/?size=48&id=17949&format=png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            <span>Continue with Google</span>
          </button>
          <div className="flex items-center">
            <p>Don't have an account?</p>
            <Link to="/signup" className="text-red-700">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
