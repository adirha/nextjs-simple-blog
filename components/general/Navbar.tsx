import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className='py-5 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>
            Blog <span className='text-blue-500'>Fagri</span>
          </h1>
        </Link>
        <Link
          href='/'
          className='text-sm font-medium hover:text-blue-500 transition-colors'
        >
          Home
        </Link>
        <Link
          href='/dashboard'
          className='text-sm font-medium hover:text-blue-500 transition-colors'
        >
          Dashboard
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        {user ? (
          <>
            <p>{user.given_name}</p>
            <LogoutLink className={buttonVariants({ variant: 'secondary' })}>
              Log out
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className={buttonVariants()}>Login</LoginLink>
            <RegisterLink className={buttonVariants({ variant: 'secondary' })}>
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
};
