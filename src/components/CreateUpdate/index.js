import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Alert from '../Alert';
import { createUpdate } from '../../services/update';

const CreateUpdate = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [type, setType] = useState('New');
  const [response, setResponse] = useState({ statusCode: null, message: null });
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUpdate({
        title,
        body,
        type,
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
              Update Title
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
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Update Body
          </label>
          <input
            onChange={(event) => setBody(event.target.value)}
            value={body}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Content..."
          />
        </div>
        <div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-10">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Type
            </label>
            <div className="relative">
              <select
                onChange={(event) => setType(event.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option selected>New</option>
                <option>Improvement</option>
                <option>Fix</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="mt-6 w-full">
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUpdate;
