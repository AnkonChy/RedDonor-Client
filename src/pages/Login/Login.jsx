import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import auth from "../../firebase/firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        setUser(result.user);
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
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
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
            <label className="text-base">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn border-pink-600 bg-red-600 mt-4 text-white"
            >
              Login
            </button>
          </form>
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
            <Link to="/signup" className="text-red-700">Sign up for free</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
