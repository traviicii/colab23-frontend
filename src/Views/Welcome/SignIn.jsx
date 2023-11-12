import React, { useState } from 'react'
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProject, setUserData, addToast, setUserProjectTeam, setUserProjectResources, setUserProjectLinks, setUserProjectInspiration } from '../../Actions';
import userReducer from '../../Reducers/UserReducer';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function SignIn() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(false)

    //Traditional user login
    const login = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const email = e.target.email.value;
        const password = e.target.password.value

        const url = BACK_END_URL + '/api/login'
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(email + ":" + password)}`
            },
        }

        try{
            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === 'ok'){
                console.log(data)
                dispatch(setUserData(data.user))
                
                if (data.project){
                    dispatch(setUserProject(data.project))
                    dispatch(setUserProjectTeam(data.project_team))
                    dispatch(setUserProjectResources(data.project_resources))
                    dispatch(setUserProjectLinks(data.project_links))
                    dispatch(setUserProjectInspiration(data.project_inspiration))
                    if (data.notifications){
                        data.notifications.forEach(notification => {
                            dispatch(addToast(notification.content))
                        })
                    }
                    navigate('/dashboard')
                } else{
                    navigate('/dashboard-unpopulated')
                }
            }
            else{
                console.log(data.message)
                dispatch(addToast(data.message, "error"))
                setIsLoading(false)
            }

        } catch {
            console.log("Login didn't work")
        }
    }

    //Call to api to see if the user already exists
    const checkUser = async (email) => {
        const URL = BACK_END_URL + '/api/checkuser'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email
            })
        }

        const res = await fetch(URL, options);
        const data = await res.json();
        console.log(data)
    }

    //This function will be used in an onClick event attatched to a google sign up button and will fetch the user's google account information.
    const GoogleUser = async (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user
            if (user) {
                console.log(user)
                checkUser(user.email)
            }
        }
        catch {
            console.log("Something isn't right with getting Google user info...")
        }
    }


    return (
        <div className='h-screen flex justify-center items-center'>

            {/* This main container div is centered */}
            <div className='border-box shadow-2xl shadow-slate-600 flex rounded-3xl h-2/3 w-2/3'>

                {/* left side */}
                <div className='flex flex-col justify-center items-center rounded-l-3xl bg-neutral-100 h-full w-3/5 text-white' style={{ backgroundColor: '#1f1d34' }}>
                    <div className='text-center'>
                    <img src={process.env.PUBLIC_URL + '/assets/HappyPlanet.png'} alt="Happy Planet" className="w-3/4 mx-auto mb-8"/>
                        <p>Ready to take your skills to the next level?</p>
                        <p className='font-bold'>Join a collaborative product team!</p>
                    </div>
                </div>

                {/* right side */}
                <div className='flex justify-center items-center flex-col h-full w-2/5 bg-white' style={{ borderRadius: '0 20px 20px 0' }}>

                    <div className='w-4/5 flex justify-center items-center flex-col'>
                        <p className='font-bold text-xl text-center w-5/6 my-2'>Sign in to work with your team</p>

                        <div className='mb-1 flex flex-col w-full'>
                            <form onSubmit={login} className='flex flex-col justity-center items-center'>
                                <input type="text" required="required" placeholder="Email" name='email' className="w-full border border-black rounded-md px-3 py-1 my-2" />

                                <input type="password" required="required" placeholder="Password" name='password' className="w-full border border-black rounded-md px-3 py-1 my-2" />

                                <p className='text-xs underline' style={{ color: '#ed4168' }}>Forgot password?</p>

                                <button type='submit' className='flex justify-center items-center gap-x-2 mt-3 py-1 px-10 border rounded w-full bg-zinc-400 text-white' style={{ backgroundColor: '#ed4168' }}>
                                {isLoading ? <svg className={`${'animate-spin'}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" fill="#FFFFFF"/></svg> : ''}
                                    Sign In</button>

                            </form>
                        </div>

                    </div>



                    <div className='flex flex-col items-center mt-2'>
                        <p className='text-sm mt-4'>Don't have an account yet?</p>
                        <p className='text-sm font-bold'>
                            <button onClick={() => navigate("/personal-details")} className='underline' style={{ color: '#ed4168' }}>Sign up now!</button>
                            {/* <a href='/personal-details' className='underline'>Sign up now!</a> */}
                        </p>
                    </div>


                </div>

            </div>
        </div>
    )
}
