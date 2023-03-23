'use client';
import Button from '@/components/elements/Button';
import AuthModal from '@/components/Modal/Auth';
import { auth } from '@/firebase/clientApp';
import { signOut, User } from 'firebase/auth';
import AuthButtons from './AuthButtons';
import Icon from './Icons';
import UserMenu from './UserMenu';

type RightContentProps = {
  user?: User | null;
}
//
export default function RightContent({ user }: RightContentProps) {
  return (
    <>
      <AuthModal/> 
      <div className="flex items-center justify-center">
        {user ? <Icon/> : <AuthButtons/>}
       <UserMenu user={user}/> 
      </div>
    </>
  );
}
