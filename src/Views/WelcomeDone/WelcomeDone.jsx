import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserID, setUserProject, setUserToken, setUserData } from '../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function WelcomeDone() {

    const navigate = useNavigate()

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    //These are here to be sent to API to create a new user once user clicks continue
    const personalForm = useSelector((state) => state.personalForm)
    const professionalBackground = useSelector((state) => state.professionalBackground)
    const aboutYouForm = useSelector((state) => state.aboutYouForm)
    const availabilityForm = useSelector((state) => state.availabilityForm)
    const skillsTools = useSelector((state) => state.skillsTools)
    //////////////////////////////

    const createNewUser = async () => {
        const url = BACK_END_URL + '/api/signup'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                personalForm: personalForm,
                professionalBackground: professionalBackground,
                aboutYouForm: aboutYouForm,
                availabilityForm: availabilityForm,
                skillsTools: skillsTools
            })
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === "ok") {
                console.log(data)
                //navigate to dashboard
                dispatch(setUserData(data.user))

                navigate('/dashboard-unpopulated')
            }
            else {
                console.log(data.message)
            }
        } 
        catch {
            console.log("something went wrong with createNewUser")
        }
    }

    return (
        <div className="professional-background-container">
            <div className="flex items-center justify-center">
                <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white mb-60">
                    <div className="mb-4 flex items-center">
                        {/* progress bar */}
                        <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">
                        You're Done!
                    </p>

                    <h2 className="text-md md:text-lg text-center font-bold mb-12">
                        Thanks for sharing your details. Your profile is now ready.
                    </h2>

                    <div className="flex items-center justify-between mt-6">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none"
                            type="button"
                            onClick={() => createNewUser()} >
                            Take Me to My Dashboard
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <button onClick={() => navigate("/your-availability")} className="text-blue-500 hover:underline text-md underline">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


// first_name: personalForm.firstName,
//                 last_name: personalForm.lastName,
//                 email: personalForm.email,
//                 password: personalForm.password,

//                 prev_role: professionalBackground.previousRole,
//                 prev_exp: professionalBackground.yearsOfExperience,
//                 mentor: professionalBackground.isMentor,
//                 prod_role: professionalBackground.productRole,
//                 prod_exp: professionalBackground.prodExperience,

//                 adjectives: aboutYouForm.adjectives,
//                 about: aboutYouForm.description,
//                 interests: aboutYouForm.fieldsOfInterest,

//                 location: availabilityForm.location,
//                 timezone: availabilityForm.timezone,
//                 hours_wk: availabilityForm.hoursPerWeek,
//                 availability: availabilityForm.availability,

//                 design_skills: skillsTools.designSkills,
//                 developer_skills: skillsTools.developerSkills,
//                 management_skills: skillsTools.managementSkills,
//                 wanted_skills: skillsTools.wantedSkills