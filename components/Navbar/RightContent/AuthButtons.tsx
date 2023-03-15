'use client';

import { authModalState } from '@/atoms/authModalAtom';
import Button from '@/components/elements/Button';
import { useSetRecoilState } from 'recoil';

export default function AuthButtons() {
  const setAuthModelState = useSetRecoilState(authModalState);

  return (
    <>
      <div className="hidden sm:block">
        <Button
          onClick={() => setAuthModelState({ open: true, view: 'login' })}
          variant="ring-primary"
          className="mr-3 sm:px-5 md:px-8 sm:py-0.5 md:py-1  "
        >
          log In
        </Button>
        <Button
          onClick={() => setAuthModelState({ open: true, view: 'signup' })}
          className="mr-3 sm:px-5 md:px-8 sm:py-0.5 md:py-1 "
        >
          Sign Up
        </Button>
      </div>
    </>
  );
}
