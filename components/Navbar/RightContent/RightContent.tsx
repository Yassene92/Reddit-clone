'use client';

import AuthModal from '@/components/Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

export default function RightContent() {
  return (
    <>
      <AuthModal/> 
      <div className="flex justify-center items-center">
        <AuthButtons />
      </div>
    </>
  );
}
