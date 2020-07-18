import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Alert from '../Alert';
import { createBoard } from '../../services/board';

const CreateBoard = () => {
  const [title, setTitle] = useState();
  const [response, setResponse] = useState({ statusCode: null, message: null });
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createBoard({
        title,
      });
      setResponse({ statusCode: 200, message: response.data });
      setTimeout(() => {
        history.push('/home');
      }, 1200);
    } catch (e) {
      const message = e.response.data.message.split(':').pop();
      setResponse({ statusCode: 400, message });
    }
  };

  return (
    <div>
      {response.statusCode !== null ? (
        <Alert
          error={response.statusCode === 200 ? false : true}
          title={response.statusCode === 200 ? 'Success!' : 'Error!'}
          text={response.message}
        />
      ) : null}
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ml-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Board Title
            </label>
            <input
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Title"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
        </div>

        <div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-10">
            <div className="mt-6 w-full">
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create Board
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;
