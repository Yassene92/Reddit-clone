import Link from 'next/link';
import Button from '../elements/Button';

export default function CommunityNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      Sorry, that community does not exist or has been banned
      <Link href={'/'}>
        <Button className="w-40 h-8 mt-2">GO HOME</Button>
      </Link>
    </div>
  );
}
