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
            <div className='border-box shadow-2xl shadow-slate-600 flex rounded-3xl h-3/5 w-3/4'>

                {/* left side */}
                <div className='flex flex-col justify-center items-center rounded-l-3xl bg-neutral-100 h-full w-3/5'>
                    <div className='text-center'>
                        <p>Ready to take your skills to the next level?</p>
                        <p className='font-bold'>Join a collaborative product team!</p>
                    </div>
                </div>

                {/* right side */}
                <div className='flex justify-center items-center flex-col h-full w-2/5'>

                    <div className='w-4/5 flex justify-center items-center flex-col'>
                        <p className='font-bold text-xl text-center w-5/6 my-2'>Sign in to work with your team</p>

                        <div className='mb-1 flex flex-col w-full'>
                            <form className='flex flex-col justity-center items-center'>
                                <input type="text" required="required" placeholder="Email" name='email' className="w-full border border-black rounded-md px-3 py-1 my-2" />

                                <input type="password" required="required" placeholder="Password" name='password' className="w-full border border-black rounded-md px-3 py-1 my-2" />

                                <p className='text-xs underline'>Forgot password?</p>

                                <button className='mt-3 py-1 px-10 border rounded-lg w-3/4 bg-slate-400 text-white'>Sign In</button>
                            </form>
                        </div>


                        {/* divider */}
                        <div className='flex justify-center items-center w-3/6'>
                            <div className='h-px w-2/6 border-b border-slate-500' />
                            <div className='p-2 text-sm text-center text-slate-500'>Or</div>
                            <div className='h-px w-2/6 border-b border-slate-500' />
                        </div>
                    </div>

                    <div className='flex justify-center items-center flex-col'>
                        <button onClick={newGoogleUser} className='my-2 text-sm font-semibold border border-black rounded-md py-1 px-10'>Sign in with Google</button>

                        <button className='my-2 text-sm font-semibold border border-black rounded-md py-1 px-10'>Sign in with GitHub</button>

                        <button className='my-2 text-sm font-semibold border border-black rounded-md py-1 px-10'>Sign in with LinkedIn</button>

                    </div>

                    <div className='flex flex-col items-center mt-2'>
                        <p className='text-sm'>Don't have an account yet?</p>
                        <p className='text-sm font-bold underline'>Sign up now!</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
