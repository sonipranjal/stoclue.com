import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiLockClosed } from 'react-icons/hi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Auth } from 'aws-amplify';
import { validateEmail } from 'src/utils';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

const RegisterComponent = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [confirmCode, setConfirmCode] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email, // optional
        },
      });
      setConfirmCode(true);
      toast.success(`We have sent a verification code to ${email}`);
    } catch (error) {
      toast.error(error.message.toString());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(email) || !password) {
      return;
    }
    await signUp();
    setLoading(false);
  };

  const handleConfirmCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!otp) {
      return;
    }
    try {
      await Auth.confirmSignUp(email, otp);
      toast.success('Verified!');
      router.push('/');
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Toaster />
        <div>
          {confirmCode ? (
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Please verify the code
              </h2>
              <p className="text-center">Please check your mailbox</p>
            </div>
          ) : (
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Create a free account
            </h2>
          )}
        </div>

        {!confirmCode && (
          <div className="mt-6">
            <div className="grid grid-cols-1 mb-6 ">
              <div>
                <button
                  type="button"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-black transition transform scale-100 bg-transparent border border-black rounded-md group hover:bg-gray-200 focus:scale-95 focus:outline-none"
                  onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                  </svg>
                  Sign up with Google
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">
                  Or use email to signup
                </span>
              </div>
            </div>
          </div>
        )}

        {confirmCode ? (
          <form className="mt-8 space-y-6" onSubmit={handleConfirmCode}>
            <label htmlFor="confirm" className="sr-only">
              confirmation code
            </label>
            <input
              id="confirmation-code"
              name="confirm"
              type="text"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
              placeholder="Confirmation Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div>
              {loading ? (
                <button
                  disabled
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineLoading3Quarters
                      className="w-5 h-5 text-yellow-500 animate-spin group-hover:text-yellow-400"
                      aria-hidden="true"
                    />
                  </span>
                  Processing
                </button>
              ) : (
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiLockClosed
                      className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400"
                      aria-hidden="true"
                    />
                  </span>
                  Confirm
                </button>
              )}
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-5 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              {loading ? (
                <button
                  disabled
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineLoading3Quarters
                      className="w-5 h-5 text-yellow-500 animate-spin group-hover:text-yellow-400"
                      aria-hidden="true"
                    />
                  </span>
                  Processing
                </button>
              ) : (
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiLockClosed
                      className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400"
                      aria-hidden="true"
                    />
                  </span>
                  Create Account
                </button>
              )}
            </div>
          </form>
        )}

        <div className="flex items-center justify-center ">
          <div className="text-sm">
            <span className="mr-3">Already have an account?</span>
            <Link href="/login">
              <a className="font-medium text-yellow-600 underline hover:text-yellow-500">
                Log in
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
