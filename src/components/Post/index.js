import React from 'react';

const Post = ({ post, handleUpvote }) => (
  <div className="mb-4 border border-gray-300 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
    <div className="mb-2">
      <div className="flex items-start">
        <p
          onClick={() => handleUpvote(post._id)}
          className="text-sm text-gray-600 flex flex-col items-center mr-4 font-medium cursor-pointer hover:text-gray-700"
        >
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
      <p className="text-gray-700 text-base mt-6 px-2">{post.details}</p>
    </div>
  </div>
);

export default Post;
