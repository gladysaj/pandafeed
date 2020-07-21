import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getBoard } from '../../services/board';
import { createPost, getPosts } from '../../services/post';

const fetch = async (url, setBoard) => {
  try {
    const response = await getBoard(url);
    setBoard(response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchPosts = async (boardId, setPosts) => {
  try {
    const response = await getPosts(boardId);
    setPosts(response.data);
  } catch (error) {
    console.log(error);
  }
};

const Board = () => {
  const history = useHistory();
  const [board, setBoard] = useState();
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (board === undefined) {
      fetch(history.location.pathname, setBoard);
    } else {
      fetchPosts(board._id, setPosts);
    }
  }, [board]);

  const renderTitle = () => {
    if (board !== undefined) {
      return board.title.charAt(0).toUpperCase() + board.title.slice(1);
    } else {
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createPost({
        title,
        details,
        board: board._id,
      });
      setTitle('');
      setDetails('');
      setPosts([...posts, { title, details, upvotes: 1 }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12 mx-16">
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-10">
        {renderTitle()}
      </h1>
      <div className="flex">
        <section className="text-gray-700 body-font relative">
          <div className="container mx-auto flex">
            <div className="bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 border border-gray-300">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Create a Post
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Submit a request or give some feedback
              </p>
              <input
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Title"
                type="text"
              />
              <textarea
                onChange={(event) => setDetails(event.target.value)}
                value={details}
                className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Details"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg"
              >
                Post
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Users of the community can upvote this post.
              </p>
            </div>
          </div>
        </section>
        <div className="ml-10 w-3/5">
          {posts.map((post, i) => {
            return (
              <div
                key={i}
                className="mb-4 border border-gray-300 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal"
              >
                <div className="mb-2">
                  <div className="flex items-start">
                    <p className="text-sm text-gray-600 flex flex-col items-center mr-4 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                      {post.upvotes}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2 mt-3">
                      {post.title}
                    </div>
                  </div>
                  <p className="text-gray-700 text-base mt-6 px-2">
                    {post.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
