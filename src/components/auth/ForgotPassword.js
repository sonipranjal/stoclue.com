import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const forgotPassword = async () => {
    try {
      const data = await Auth.forgotPassword(email);
      toast.success(`We have sent a verification code to ${email}`);
      setConfirmation(true);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetPassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      toast.success(`password changed successfully`);
      router.push('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Both password must match');
    }
    setLoading(true);
    !confirmation && (await forgotPassword());
    confirmation && (await resetPassword());
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <Toaster />
      <div className="w-10/12 max-w-md p-10 space-y-8 rounded-md shadow-lg">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Enter your email and we'll send you a verification code to reset
            your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          {confirmation && (
            <div className="space-y-5">
              <div>
                <label htmlFor="verify-code" className="sr-only">
                  Verify code
                </label>
                <input
                  id="verify-code"
                  name="code"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Verification Code"
                  onChange={(e) => setCode(e.target.value)}
                  value={code}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="New Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm New Password
                </label>
                <input
                  id="confirm-new-password"
                  name="confirm-new-password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm New Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>
            </div>
          )}
          <div>
            {!confirmation &&
              (loading ? (
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
                  Reset Password
                </button>
              ))}

            {confirmation &&
              (loading ? (
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
                  Confirm
                </button>
              ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
