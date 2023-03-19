'use client';
import { authModalState } from '@/atoms/authModalAtom';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';

export default function AuthInputs() {
  const modalState = useRecoilValue(authModalState);
  return (
    <>
      {modalState.view === 'login' && <Login />}
      {modalState.view === 'signup' && <SignUp />}
      {modalState.view === 'resetPassword' && <ResetPassword />}
    </>
  );
}
