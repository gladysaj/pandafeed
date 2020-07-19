import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Alert from '../Alert';
import { auth } from '../../services/auth';

const AuthForm = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [response, setResponse] = useState({ statusCode: null, message: null });
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await auth(props.signup, {
        name,
        email,
        company,
        password,
      });
      setResponse({
        statusCode: response.status,
        message: response.data.message,
      });
      setTimeout(() => {
        if (props.signup) {
          history.push('/login');
          setResponse({
            statusCode: null,
            message: null,
          });
        } else {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          props.setIsAuth(true);
          history.push('/home');
        }
      }, 1200);
    } catch (error) {
      setResponse({
        statusCode: error.response.status,
        message: error.response.data.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {response.statusCode !== null ? (
          <Alert
            error={response.statusCode === 200 ? false : true}
            title={response.statusCode === 200 ? 'Success!' : 'Error!'}
            text={response.message}
          />
        ) : null}
        <div className="mt-12">
          <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            {props.signup ? 'Create an account' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-600">
            {props.signup ? (
              <>
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Log-in instead
                </Link>
              </>
            ) : (
              <>
                Or{' '}
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  start your 14-day free trial
                </Link>
              </>
            )}
          </p>
        </div>
        <form
          className="mt-8"
          action="#"
          method="POST"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              {props.signup ? (
                <input
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  aria-label="Name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-purple focus:border-purple-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Name"
                />
              ) : null}
            </div>
            <div className="-mt-px">
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                aria-label="Email address"
                name="email"
                type="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  props.signup ? 'rounded-none' : 'rounded-t-md'
                } focus:outline-none focus:shadow-outline-purple focus:border-purple-300 focus:z-10 sm:text-sm sm:leading-5`}
                placeholder="Email address"
              />
            </div>
            {props.signup ? (
              <div className="-mt-px">
                <input
                  onChange={(event) => setCompany(event.target.value)}
                  value={company}
                  aria-label="Company"
                  name="company"
                  type="text"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                    props.signup ? 'rounded-none' : 'rounded-t-md'
                  } focus:outline-none focus:shadow-outline-purple focus:border-purple-300 focus:z-10 sm:text-sm sm:leading-5`}
                  placeholder="Company"
                />
              </div>
            ) : null}
            <div className="-mt-px">
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                aria-label="Password"
                name="password"
                type="password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  props.signup ? 'rounded-none' : 'rounded-b-md'
                } focus:outline-none focus:shadow-outline-purple focus:border-purple-300 focus:z-10 sm:text-sm sm:leading-5`}
                placeholder="Password"
              />
            </div>
            {props.signup ? (
              <div className="-mt-px">
                <input
                  onChange={(event) =>
                    setPasswordConfirmation(event.target.value)
                  }
                  value={passwordConfirmation}
                  aria-label="Confirm password"
                  name="confirm-password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-purple focus:border-purple-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Confirm password"
                />
              </div>
            ) : null}
          </div>

          {props.signup ? null : (
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-5">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {props.signup ? 'Create account' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
