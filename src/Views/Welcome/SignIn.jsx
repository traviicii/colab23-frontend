import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

export default function SignIn() {

    //This function will be used in an onClick event attatched to a google sign up button and will fetch the user's google account information.
    const newGoogleUser = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
            const result = await signInWithRedirect(auth, provider);
            console.log(result)
            const user = result.user
            if (user) {
                console.log(user)
            }
        }
        catch {
            console.log("Something isn't right with getting Google user info...")
        }
    }


    return (
        <div className='h-screen flex justify-center items-center'>

            {/* This main container div is centered */}
            <div className='border-box shadow-2xl shadow-slate-600 flex rounded-3xl h-3/4 w-3/4'>

                {/* left side */}
                <div className='flex flex-col justify-center items-center rounded-l-3xl bg-neutral-100 h-full w-3/5'>
                    <div className='text-center'>
                        <p>Ready to take your skills to the next level?</p>
                        <p className='font-bold'>Join a collaborative product team!</p>
                    </div>
                </div>

                {/* right side */}
                <div className='flex justify-center items-center h-full w-2/5'>
                    <div className='w-4/5'>
                        <p className='font-bold text-xl text-center w-5/6'>Sign in to work with your team</p>

                        <div className='flex flex-col w-full'>
                        <input type="text" required="required" placeholder="Email" name='email' className="border border-black rounded-md pl-3 py-2 my-2" />

                        <input type="password" required="required" placeholder="Password" name='password' className="border border-black rounded-md pl-3 py-2 my-2" />
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
