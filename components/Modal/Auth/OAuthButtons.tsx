import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/elements/Button';

export default function OAuthButtons() {
  return (
    <div className="py-2 space-y-2">
      <Button
        variant="primary"
        className="flex items-center justify-center w-full h-10 "
      >
        <FcGoogle className="mx-3 text-xl" />
        <span className="px-8">Continue with Google</span>
      </Button>
      <Button variant="primary" className="w-full h-10 ">
        Continue with other services
      </Button>
    </div>
  );
}
