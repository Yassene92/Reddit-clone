'use client';
import { authModalState } from '@/atoms/authModalAtom';
import Button from '@/components/elements/Button';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { auth } from '@/firebase/clientApp';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function SignUp() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signForm, setSignForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //apdate state
    setSignForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // firebase logic
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signForm.password !== signForm.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(signForm.email, signForm.password);
      setAuthModalState((prev) => ({ ...prev, open: false }));
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setFormError('Cannot create user, email already in use');
      } else {
        console.log("user creation encountered a", error);
      }
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="py-4 space-y-3 ">
        <input
          className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
          type="email"
          placeholder="email"
          name="email"
          value={signForm.email}
          required
          onChange={onChange}
        />
        <input
          className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
          type="password"
          placeholder="password"
          name="password"
          value={signForm.password}
          required
          onChange={onChange}
        />
        <input
          className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={signForm.confirmPassword}
          required
          onChange={onChange}
        />
        {formError && (
          <p className="flex justify-center text-xs text-red-500">
            {formError}
          </p>
        )}
        <Button type="submit" variant="orange-btn" className="w-full h-10 ">
          {loading ? 'loading...' : 'Sign Up'}
        </Button>
        <p className="text-xs">
          <span className=" text-blackl">Already a redditor?</span>
          <span
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: 'login',
              }))
            }
            className="font-semibold text-blue-500 underline cursor-pointer "
          >
            Log In
          </span>
        </p>
      </form>
    </>
  );
}
