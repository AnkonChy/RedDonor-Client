import React, { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { PiEyesFill } from "react-icons/pi";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { districtsData, upazilaData } = useLoaderData();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = {
      email,
      name,
      avatar,
      bloodGroup,
      district,
      upazila,
      password,
    };
    console.log(registerData);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

        //sent varification email address
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email varificaiton sent successfully");
        });

        //update profile information
        const profile = {
          displayName: name,
          photoURL:
            "https://i.ibb.co.com/43rxh2C/pexels-julia-m-cameron-6994944.jpg",
        };

        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("user profile updated");
          })
          .catch((error) => console.log("User profile update error"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-pink-50 pt-10">
      <Helmet>
        <title>RedDonor | Sign Up</title>
      </Helmet>
      <div className="bg-base-100 w-full max-w-xl shadow-2xl mx-auto">
        <h1 className="text-4xl font-semibold text-center pt-10">
          Register Your Account
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-base">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-base">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-base">Avatar</label>
                <input
                  onChange={(e) => setAvatar(e.target.value)}
                  type="url"
                  className="input"
                  placeholder="Avatar"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-base">Blood Group</label>
                <select
                  className="input"
                  onChange={(e) => setUpazila(e.target.value)}
                  name="bloodGroup"
                  id=""
                >
                  <option value="" disabled selected>
                    Select blood group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-base">District</label>
                <select
                  className="input"
                  onChange={(e) => setBloodGroup(e.target.value)}
                  name="bloodGroup"
                  id=""
                >
                  {districtsData.map((district) => (
                    <option key={upazila?.id} value={district?.name}>
                      {district?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-base">Upazila</label>
                <select
                  className="input"
                  onChange={(e) => setDistrict(e.target.value)}
                  id=""
                >
                  <option value="" disabled selected>
                    Select Upazila
                  </option>
                  {upazilaData.map((upazila) => (
                    <option key={upazila?.id} value={upazila?.name}>
                      {upazila?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-base">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className=" btn-xs absolute right-5 top-8 text-xl"
              >
                {showPassword ? <LuEyeClosed /> : <PiEyesFill />}
              </button>
            </div>
            <div className="flex flex-col">
              <label className="text-base">Confirm Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn border-pink-600 bg-red-600 mt-4 text-white"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <button className="btn">
            <img
              src="https://img.icons8.com/?size=48&id=17949&format=png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            <span>Continue with Google</span>
          </button>
          <div className="flex items-center">
            <p>Already have an account?</p>
            <NavLink to="/signin" className="text-red-700">
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
