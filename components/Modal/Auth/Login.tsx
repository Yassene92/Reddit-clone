'use client';
import { authModalState } from '@/atoms/authModalAtom';
import Button from '@/components/elements/Button';
import { auth } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

 export default function Login() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //firebase login
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="py-4 space-y-3 ">
        <input
          className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
          type="email"
          placeholder="Email"
          name="email"
          value={loginForm.email}
          required
          onChange={onChange}
        />
        <input
          className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
          type="password"
          placeholder="Password"
          name="password"
          value={loginForm.password}
          required
          onChange={onChange}
        />
        {error && (
          <p className="flex justify-center text-xs text-red-500">
            {FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]}
          </p>
        )}
        <Button type="submit" variant="orange-btn" className="w-full h-10 ">
          {loading ? 'Submit...' : 'Login'}
        </Button>
        <div className="text-xs">
          <p className="px-1 text-blackl">
            Forgot your password?
            <span
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  view: 'resetPassword',
                }))
              }
              className="px-3 font-semibold text-blue-500 underline cursor-pointer"
            >
              reset password
            </span>
          </p>
          <p className="px-1 text-blackl">
            New to Reddit?
            <span
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  view: 'signup',
                }))
              }
              className="px-2 font-semibold text-blue-500 underline cursor-pointer "
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </>
  );
}
