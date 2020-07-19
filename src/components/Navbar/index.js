import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { logout } from '../../services/auth';

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => ++value);
}

const Navbar = ({ isAuth }) => {
  const forceUpdate = useForceUpdate();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) forceUpdate();
  }, [isAuth]);

  const handleLogout = async () => {
    localStorage.removeItem('user');
    await logout();
    history.push('/');
    forceUpdate();
  };

  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#features" className="mr-5 hover:text-indigo-600">
            Features
          </a>
          <a href="#pricing" className="mr-5 hover:text-indigo-600">
            Pricing
          </a>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
        </nav>
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <img src="logo.svg" className="w-10" alt="pandafeed" />
          <span className="ml-3 text-xl">pandafeed</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 items-center">
          {localStorage.getItem('user') ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-white mt-4 md:mt-0"
            >
              Sign Out
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ) : (
            <div>
              <Link to="/login" className="mr-5 hover:text-gray-900">
                Log in
              </Link>
              <Link to="/signup">
                <button className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-white mt-4 md:mt-0">
                  Sign up
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
