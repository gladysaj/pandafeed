import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Alert from '../Alert';
import { createCompany } from '../../services/company';

const Company = () => {
  const [companyName, setCompanyName] = useState();
  const [description, setDescription] = useState();
  // const [companyLogo, setCompanyLogo] = useState();
  const [response, setResponse] = useState({ statusCode: null, message: null });
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createCompany({
        companyName,
        description,
      });
      console.log(response);
      setResponse({ statusCode: 200, message: 'Your company was created!' });
      setTimeout(() => {
        history.push('/home');
      }, 3000);
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Company Name
            </label>
            <input
              onChange={(event) => setCompanyName(event.target.value)}
              value={companyName}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Qizai"
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
            Description
          </label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Describe your company"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>

        <div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Company logo
            </label>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                  <div className="w-0 flex-1 flex items-center">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      Browse
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
            <br />
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create Company
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Company;
