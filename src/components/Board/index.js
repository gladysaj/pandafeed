import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getBoard } from '../../services/board';

const fetch = async (url, setBoard) => {
  try {
    const response = await getBoard(url);
    setBoard(response.data);
  } catch (error) {
    console.log(error);
  }
};

const Board = () => {
  const history = useHistory();
  const [board, setBoard] = useState();

  useEffect(() => {
    fetch(history.location.pathname, setBoard);
  }, []);

  const renderTitle = () => {
    if (board !== undefined) {
      return board.title.charAt(0).toUpperCase() + board.title.slice(1);
    } else {
      return null;
    }
  };

  return (
    <div className="mt-12 mx-16">
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-10">
        {renderTitle()}
      </h1>
      <section className="text-gray-700 body-font relative">
        <div className="container mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 border border-gray-300">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Create a Post
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Submit a request or give some feedback
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2 mb-4"
              placeholder="Title"
              type="text"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-purple-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Details"
            ></textarea>
            <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Post
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Users of the community can upvote this post.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
