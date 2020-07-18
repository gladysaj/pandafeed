import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="bg-gray-50 px-40 mt-12">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {`Welcome ${user.name}! 👋`}
          <br />
          <span className="text-indigo-600 text-2xl">
            Let's get started by creating your first board.
          </span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/create-board"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Create Board
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Skip for now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
