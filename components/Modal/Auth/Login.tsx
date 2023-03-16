'use client';
import { authModalState } from '@/atoms/authModalAtom';
import Button from '@/components/elements/Button';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function Login() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  //firebase login
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <form onSubmit={onSubmit} className="py-4 space-y-3 ">
        <input
          className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
          type="text"
          placeholder="username"
          name="username"
          required
          onChange={onChange}
        />
        <input
          className="w-full h-10 px-4 py-2 text-lg placeholder-gray-400 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform-gpu hover:scale-105 hover:shadow-md"
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={onChange}
        />
        <Button type="submit" variant="orange-btn" className="w-full h-10 ">
          Log in
        </Button>
        <p className="text-xs">
          <span className=" text-blackl">New to Reddit?</span>
          <span
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: 'signup',
              }))
            }
            className="font-semibold text-blue-500 underline cursor-pointer "
          >
            Sign Up
          </span>
        </p>
      </form>
    </>
  );
}
