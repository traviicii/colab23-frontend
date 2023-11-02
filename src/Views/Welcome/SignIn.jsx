import React from 'react'
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

    //Traditional user login
    const login = async (e) => {
        e.preventDefault()

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
                    navigate('/dashboard')
                } else{
                    navigate('/dashboard-unpopulated')
                }
            }
            else{
                console.log(data.message)
                dispatch(addToast(data.message, "error"))
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
            <div className='border-box shadow-2xl shadow-slate-600 flex rounded-3xl h-3/5 w-3/4'>

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

                                <p className='text-xs underline'>Forgot password?</p>

                                <button type='submit' className='mt-3 py-1 px-10 border rounded w-full bg-zinc-400 text-white' style={{ backgroundColor: '#ed4168' }}>Sign In</button>

                            </form>
                        </div>


                        {/* divider */}
                        <div className='flex justify-center items-center w-3/6'>
                            <div className='h-px w-2/6 border-b border-zinc-500' />
                            <div className='p-2 text-sm text-center text-zinc-500'>Or</div>
                            <div className='h-px w-2/6 border-b border-zinc-500' />
                        </div>
                    </div>

                    <div className='flex justify-center items-center flex-col w-4/5'>
                        <button onClick={GoogleUser} className='flex justify-center items-center my-2 text-sm font-semibold border border-black rounded-md py-1.5 px-10 w-full '>
                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Sign in with Google</button>

                        <button className='flex justify-center items-center my-2 text-sm font-semibold border border-black rounded-md py-1.5 px-10 w-full'>
                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                            Sign in with LinkedIn</button>

                        <button className='flex justify-center items-center my-2 text-sm font-semibold border border-black rounded-md py-1.5 px-10 w-full'>
                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
                                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                            </svg>
                            Sign in with GitHub</button>

                    </div>

                    <div className='flex flex-col items-center mt-2'>
                        <p className='text-sm mt-2'>Don't have an account yet?</p>
                        <p className='text-sm font-bold'>
                            <button onClick={() => navigate("/personal-details")} className='underline text-rose-500'>Sign up now!</button>
                            {/* <a href='/personal-details' className='underline'>Sign up now!</a> */}
                        </p>
                    </div>


                </div>

            </div>
        </div>
    )
}
