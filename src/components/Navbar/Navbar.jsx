import { NavLink } from "react-router-dom";

function Navbar() {
  const list = (
    <>
      <li className="text-lg font-normal">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-normal">
        <NavLink to="/book-list">Listed Books</NavLink>
      </li>
      <li className="text-lg font-normal">
        <NavLink to="/read-pages">Pages to Read</NavLink>
      </li>
      <li className="text-lg font-normal">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div>
        <div className="bg-base-100 shadow-md workSans">
          <div className="container mx-auto px-4 navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
                >
                  {list}
                </ul>
              </div>
              <a className="font-bold text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-2">{list}</ul>
            </div>
            <div className="navbar-end gap-4">
              <a className="btn btn-success text-white">Sign In</a>
              <a className="btn btn-accent text-white">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
