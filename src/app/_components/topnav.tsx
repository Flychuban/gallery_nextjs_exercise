import { SignInButton,SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import SimpleUploadButton from './simple-upload-button';


export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between h-22 py-0 px-4 border-b text-base font-semibold">
      <div>Gallery</div>

      <div className='flex flex-row gap-6 items-center'>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <SimpleUploadButton />
            <UserButton />
        </SignedIn>  
      </div>
    </nav>
  );
}