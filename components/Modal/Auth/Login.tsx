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
          className="w-full h-10 py-2 pl-6 placeholder-gray-500 bg-gray-100 border-none outline-none rounded-2xl ring-0 hover:ring-1 ring-gray-300 text-blackl placeholder:hover:-translate-y-3 placeholder:hover:scale-90 text-md "
          type="text"
          placeholder="Username"
          name="Username"
          required
          onChange={onChange}
        />
        <input
          className="w-full h-10 py-2 pl-4 pr-3 placeholder-gray-500 bg-gray-100 border-none outline-none rounded-2xl ring-0 hover:ring-1 ring-gray-300 text-blackl placeholder:hover:-translate-y-3 placeholder:hover:scale-90 text-md "
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
