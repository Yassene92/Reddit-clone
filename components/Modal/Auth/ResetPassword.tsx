'use client';
import { useState } from 'react';

import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import Button from '@/components/elements/Button';
import { BsDot, BsReddit } from 'react-icons/bs';

export default function ResetPassword() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <>
      <BsReddit className="w-full py-1 text-5xl text-redd" />

      {success ? (
        <p>Check your Email :)</p>
      ) : (
        <>
          <p className='text-base text-blackl '>
            Enter the email associated with your account and we will send you a
            reset link
          </p>
          <form className="py-3 space-y-3" onSubmit={onSubmit}>
            <input
              className="w-full h-10 px-4 py-2 placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-300 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-scale"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <Button type="submit" variant="orange-btn" className="w-full h-10 ">
              {sending ? 'Sending...' : 'Reset Password'}
            </Button>
          </form>
        </>
      )}
      <div className='flex items-center justify-center text-blue-500 cursor-pointer'>
        <span
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }))
          }
        >
          LOGIN
        </span>
        <BsDot />
        <span
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'signup',
            }))
          }
        >
          SIGN UP
        </span>
      </div>
    </>
  );
}
