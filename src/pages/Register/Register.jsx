import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Register = () => {
  const { districtsData, upazilaData } = useLoaderData();
  //   console.log(districtsData)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [password, setPassword] = useState("");
  const registerData = {
    email,
    name,
    avatar,
    bloodGroup,
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-base-100 w-full max-w-2xl shadow-2xl">
        <h1 className="text-4xl font-semibold text-center pt-10">
          Register Your Account
        </h1>
        <div className="card-body">
          <form className="space-y-2">
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
                  onChange={(e) => setUpazila(e.target.value)}
                  name="bloodGroup"
                  id=""
                >
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
                  onChange={(e) => setBloodGroup(e.target.value)}
                  name="bloodGroup"
                  id=""
                >
                  {districtsData.map((district) => (
                    <option value={district?.name}>{district?.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-base">Upazila</label>
                <select onChange={(e) => setDistrict(e.target.value)} id="">
                  {upazilaData.map((upazila) => (
                    <option value={upazila?.name}>{upazila?.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-base">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input"
                placeholder="Password"
              />
            </div>
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
          <button className="btn">
            <img
              src="https://img.icons8.com/?size=48&id=17949&format=png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            <span>Continue with Google</span>
          </button>
          <div className="flex items-center">
            <p>Don't have an account?</p>
            <Link className="text-red-700">Sign up for free</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
