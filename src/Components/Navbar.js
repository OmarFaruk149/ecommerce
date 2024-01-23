import React from "react";
import icon from "../Images/search.svg";
import account from "../Images/account.svg";
import filter from "../Images/filter.svg";

export default function Navbar() {
  return (
    <>
      <div className="NavBar w-full fixed top-0 p-2 bg-gray-800 flex">
        <div
          className="Name text-white border border-gray-700 rounded-lg font-mono text-2xl mx-2 px-2 pt-1 hover:bg-gray-700"
          title="Home"
          onClick={() => console.log("Hi")}
        >
          Mobile Commerce
        </div>
        <div className="SearchBox flex-1">
          <div className=" flex bg-white border p-2 rounded-full">
            <input
              type="text"
              className="focus:outline-none ml-1 bg-transparent text-gray-800 w-full"
              placeholder="Search Product"
            />
            <button
              className="icon bg-gray-400 p-1 mr-2 rounded-md hover:bg-gray-500"
              onClick={(event) => event.preventDefault()}
            >
              <div className="">
                <img src={filter} alt="filter" className="w-5 h-5" />
              </div>
            </button>
            <button
              className="icon bg-gray-400 p-1 mr-2 rounded-md hover:bg-gray-500"
              onClick={(event) => event.preventDefault()}
            >
              <div className="">
                <img src={icon} alt="search" className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        <div className="account border rounded-lg ml-3 p-1 hover:bg-gray-700 border-gray-700 flex">
          <button
            className="hover:bg-gray-800 mx-1 rounded-lg"
            title="Profile"
            onClick={(event) => event.preventDefault()}
          >
            <img src={account} alt="" className="h-6 w-6 p-1 mx-1" />
          </button>
          <button
            className="text-gray-300 border-gray-700 p-1 mx-1 rounded-lg hover:bg-gray-800"
            title="Login"
            onClick={(event) => event.preventDefault()}
          >
            Login
          </button>
          <button
            className="text-gray-300 border-gray-700 rounded-lg mx-1 p-1  hover:bg-gray-800"
            title="Sign Up"
            onClick={(event) => event.preventDefault()}
          >
            Register
          </button>
        </div>
        <div className="Cart"></div>
      </div>
    </>
  );
}
