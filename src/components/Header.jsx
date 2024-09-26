import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart } from 'lucide-react'

const Header = () => {
    const [showSignIn, setShowSignIn] = useState(false)

    const [search, setSearch] = useSearchParams();

    useEffect(()=>{
        if(search.get("sign-in")){
            setShowSignIn(true)
        }
    },[search])

    const handleOverClick = (e) => {
        if(e.target === e.currentTarget){
            setShowSignIn(false)
            setSearch({})
        }
    }
  return (
    <>
        <nav className='py-4 flex justify-between items-center'>
            <Link>
                <img src="/logo.png" alt="logo" className='h-20' />
            </Link>

            

            <div className='flex gap-8'>

            <SignedOut>
            <Button variant="outline" onClick={()=>setShowSignIn(true)} >Login</Button>
            </SignedOut>
            <SignedIn>
            <Button variant="destructive">Post a job</Button>
            <Link to="/posting-job"></Link>
                <UserButton appearance={{
                    elements:{
                        avatarBox:"w-10 h-10",
                    }
                }} >
                    <UserButton.MenuItems>
                        <UserButton.Link label='My Jobs' labelIcon={<BriefcaseBusiness size={15} />} href='/my-jobs'/>
                    </UserButton.MenuItems>

                    <UserButton.MenuItems>
                        <UserButton.Link label='Saved Jobs' labelIcon={<Heart size={15} />} href='/saved-jobs'/>
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
            </div>
        </nav>

        {showSignIn && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' onClick={handleOverClick}>
                {/* <SignIn signUpForceRedirectUrl='/onboarding' signUpFallbackRedirectUrl='/onboarding' /> */}
                <SignIn signUpForceRedirectUrl='/onboarding' fallbackRedirectUrl='/onboarding' />
            </div>
        )}
    </>
  )
}

export default Header
