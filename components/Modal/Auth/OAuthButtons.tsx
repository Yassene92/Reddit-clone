import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/elements/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { auth, firestore } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

export default function OAuthButtons() {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, 'users', user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

  return (
    <div className="py-2 space-y-2">
      <Button
        variant="primary"
        className="flex items-center justify-center w-full h-10 "
        onClick={() => signInWithGoogle()}
      >
        <FcGoogle className="mx-3 text-xl" />
        <span className="px-8">
          {loading ? 'Submit...' : 'Continue with Google'}
        </span>
      </Button>
      {error && (
        <p className="flex justify-center text-xs text-red-500">
          {FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]}
        </p>
      )}
      <Button variant="primary" className="w-full h-10 ">
        <span> Continue with other services</span>
      </Button>
    </div>
  );
}
