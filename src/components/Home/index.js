import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BoardTable from '../../components/BoardTable';
import Onboarding from '../../components/Onboarding';
import { getBoards } from '../../services/board';

const fetch = async (setBoards) => {
  try {
    const response = await getBoards();
    setBoards(response.data);
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  const [boards, setBoards] = useState();

  useEffect(() => {
    fetch(setBoards);
  }, []);

  const renderContent = () => {
    if (boards !== undefined && boards.length > 0) {
      return (
        <div className="mt-12 mx-16">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Your Boards
            </h1>
            <Link to="/create-board">
              <span className="sm:ml-3 shadow-sm rounded-md">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create new board
                </button>
              </span>
            </Link>
          </div>
          <BoardTable boards={boards} />
        </div>
      );
    }

    if (boards !== undefined) {
      return <Onboarding />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Home;
