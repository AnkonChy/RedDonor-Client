import React from "react";
import { BsSearch } from "react-icons/bs";
import { useLoaderData } from "react-router";
const Search = () => {
  const { districtsData, upazilaData } = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center">
      <form action="">
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

        <div className="flex flex-col w-1/2">
          <label className="text-base">District</label>
          <select
            className="input"
            onChange={(e) => setBloodGroup(e.target.value)}
            name="bloodGroup"
            id=""
          >
            {districtsData.map((district) => (
              <option key={district?.id} value={district?.name}>
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

        <button
          type="submit"
          className="btn border-pink-600 bg-red-600 mt-4 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
