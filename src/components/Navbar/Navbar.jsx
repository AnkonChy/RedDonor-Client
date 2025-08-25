import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(name);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("user sign out successfully");
      })
      .catch((error) => console.log("error", error.message));
  };
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-36 mx-auto">
      <div className="navbar-start">
        {/* <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 tracking-wide">
          Red<span className="text-white">Donor</span>
        </h1> */}
        <img
          src="https://i.ibb.co.com/Mx6WLB02/Red-Donor-1.png"
          className="w-36 md:w-44"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul> */}
      </div>
      <div className="navbar-end">
        <ul className="gap-6 items-center px-1  hidden lg:flex text-base font-semibold">
          <li>
            <NavLink to="donation-request">Donation Request</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink to="/funding">Funding</NavLink>
              </li>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Sign Out</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/signin">Sign In</NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow right-0"
          >
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <NavLink to="/">Dashboard</NavLink>
                    </li>
                    <li>
                      <button onClick={handleSignOut}>Sign Out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/signin">Sign In</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="donation-request">Donation Request</NavLink>
            </li>
            <li>
              <NavLink to="/funding">Funding</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
