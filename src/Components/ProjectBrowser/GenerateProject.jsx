import React, { useEffect, useState } from 'react'

export default function GenerateProject({ setActiveDisplay, chosenProject, setChosenProject }) {

    const projectIdeas = [
        { title: "Urban Garden App", prompt: "Design a mobile app for urban garden enthusiasts." },
        { title: "AR Museum Guide", prompt: "Develop an AR experience for museum-goers." },
        { title: "Remote Worker Health", prompt: "Craft a digital platform for remote workers focusing on health." },
        { title: "Interactive Children's Stories", prompt: "Create a mobile app for interactive children's bedtime stories." },
        { title: "Eco-conscious Shopping", prompt: "Build a shopping assistant app emphasizing eco-conscious choices." },
        { title: "Virtual Escape Room", prompt: "Construct an online platform for designing virtual escape rooms." },
        { title: "Teen Financial Coaching", prompt: "Design a financial coaching app tailored for teenagers." },
        { title: "Global Cuisine Explorer", prompt: "Develop a culinary app exploring global cuisines." },
        { title: "Memory Time Capsule", prompt: "Build a digital platform for creating and storing memory time capsules." },
        { title: "Freelancer PM Tool", prompt: "Design a project management tool specifically for freelancers." },
        { title: "Block Party Organizer", prompt: "Create a web app for organizing neighborhood block parties." },
        { title: "Digital Art Gallery", prompt: "Design a digital platform for virtual art galleries." },
        { title: "Mindfulness Challenge App", prompt: "Build a mobile app for daily mindfulness challenges." },
        { title: "Musician Collaboration Tool", prompt: "Develop a web tool for indie musicians to collaborate remotely." },
        { title: "Elderly Workout App", prompt: "Design a workout app focused on elderly users." },
        { title: "Historic Landmark Tours", prompt: "Create a virtual tour app for historic landmarks." },
        { title: "Aspiring Author Showcase", prompt: "Develop a web platform for aspiring authors to share first chapters." },
        { title: "Wine and Cheese App", prompt: "Design a mobile app for pairing wine and cheese." },
        { title: "DIY Repair Tutorials", prompt: "Build an online tool for DIY home repair tutorials." },
        { title: "Pet Adoption Matchmaking", prompt: "Create a matchmaking app for pet adoptions." },
        { title: "Programming Game", prompt: "Design a mobile game teaching basic programming concepts." },
        { title: "Local Farmers Market", prompt: "Develop a web tool for local farmers to advertise produce." },
        { title: "Indie Film Festivals", prompt: "Build a virtual event platform for indie film festivals." },
        { title: "Wildlife Tracking App", prompt: "Design a mobile app for tracking local wildlife sightings." },
        { title: "Homebrewing Guide", prompt: "Create a digital tool for homebrewing enthusiasts." },
        { title: "Volunteer Matcher", prompt: "Develop a web platform for local volunteer opportunities." },
        { title: "Local Folklore Explorer", prompt: "Build a mobile app for exploring local folklore and myths." },
        { title: "Fashion Exchange", prompt: "Design a digital platform for second-hand fashion exchanges." },
        { title: "Hiking Trails Mapper", prompt: "Create a web tool for mapping and reviewing hiking trails." },
        { title: "Indigenous Language Learning", prompt: "Develop a language-learning app with a focus on indigenous languages." },
        { title: "Recycling Projects", prompt: "Design a digital platform for community-driven recycling projects." },
        { title: "Book Clubs App", prompt: "Create a mobile app for book clubs and reading groups." },
        { title: "Home Renovation Planner", prompt: "Build an online tool for planning and visualizing home renovations." },
        { title: "VR Meditation", prompt: "Design a virtual reality experience for meditation." },
        { title: "Journalists Network", prompt: "Develop a web platform connecting freelance journalists with editors." },
        { title: "Carbon Footprint Tracker", prompt: "Design a mobile app for tracking and reducing personal carbon footprint." },
        { title: "Underground Music Scene", prompt: "Create a digital platform for discovering underground music scenes." },
        { title: "Carpooling App", prompt: "Build a web tool for organizing carpools and ride shares." },
        { title: "Stargazing App", prompt: "Design an app for virtual stargazing and constellation learning." },
        { title: "Amateur Chef Recipes", prompt: "Develop a platform for amateur chefs to share video recipes." },
        { title: "On-demand Lawn Care", prompt: "Create a mobile app for on-demand lawn care services." },
        { title: "Barter Network", prompt: "Design a web platform for bartering goods and services." },
        { title: "Local Plants Guide", prompt: "Develop a mobile app for learning about local plants and herbs." },
        { title: "Tabletop Games Hub", prompt: "Build a digital platform for tabletop game enthusiasts." },
        { title: "Community Cleanup Organizer", prompt: "Design a web app for organizing community cleanup events." },
        { title: "Mentorship Connection", prompt: "Create a mobile app for connecting mentors and mentees in various fields." },
        { title: "Shared Expenses Tracker", prompt: "Build a web tool for tracking shared expenses among friends." },
        { title: "Short Story Contests", prompt: "Design a digital platform for hosting short story contests." },
        { title: "Local Crafts Fair", prompt: "Develop a virtual marketplace for local crafts and handmade goods." },
        { title: "Language Exchange", prompt: "Create a mobile app for facilitating language exchange partnerships." },
        { title: "Elderly Pen Pals", prompt: "Build a web platform connecting the elderly with pen pals." },
        { title: "Historical Photo Archive", prompt: "Design a digital archive for historical photographs of a city." },
        { title: "Neighborhood Watch", prompt: "Develop an app for neighborhood watch groups and reporting." },
        { title: "DIY Beauty Recipes", prompt: "Design a mobile app for DIY beauty and skincare recipes." },
        { title: "Virtual Craft Workshops", prompt: "Create a web platform for hosting virtual craft workshops." },
        { title: "Public Transport Planner", prompt: "Develop a mobile app for optimizing public transport routes." },
        { title: "Aquarium Care Guide", prompt: "Design a digital guide for aquarium enthusiasts." },
        { title: "Local Arts Performance", prompt: "Create a virtual event platform for local arts and theater performances." },
        { title: "Gardening Workshops", prompt: "Build a web platform for virtual gardening workshops and tips." },
        { title: "Urban Exploration", prompt: "Develop a mobile app for urban exploration and discovery." },
        { title: "Food Allergies App", prompt: "Design an app for tracking and learning about food allergies." },
        { title: "Amateur Photography Contests", prompt: "Create a digital platform for hosting amateur photography contests." },
        { title: "Personal Library Organizer", prompt: "Develop a web tool for organizing personal book libraries." },
        { title: "Work-from-home Exercises", prompt: "Design a mobile app for quick exercises during work-from-home breaks." },
        { title: "Homemade Candles Guide", prompt: "Create a digital platform for DIY candle making tutorials." },
        { title: "Mystery Book Club", prompt: "Build a mobile app for a mystery-themed book club." },
        { title: "Community Yoga Classes", prompt: "Design a web platform for virtual community yoga classes." },
        { title: "Local Trivia Game", prompt: "Develop a mobile game based on local history and trivia." },
        { title: "DIY Furniture Tutorials", prompt: "Design a digital platform for DIY furniture making." },
        { title: "Neighborhood Events", prompt: "Create a web tool for discovering neighborhood events and meetups." },
        { title: "Cultural Recipes App", prompt: "Develop a mobile app for exploring cultural recipes from around the world." },
        { title: "Comic Book Exchange", prompt: "Design a digital platform for exchanging and discussing comic books." },
        { title: "Personal Growth Challenges", prompt: "Build a mobile app for 30-day personal growth challenges." },
        { title: "Virtual Science Fair", prompt: "Develop a web platform for hosting virtual science fairs for students." },
        { title: "Local Artisan Showcase", prompt: "Design an app showcasing local artisans and their crafts." },
        { title: "Collaborative Film Projects", prompt: "Create a digital platform for collaborative amateur film projects." },
        { title: "Scrapbooking Ideas", prompt: "Develop a mobile app filled with scrapbooking design ideas." },
        { title: "Virtual Open Mic", prompt: "Design a web tool for hosting virtual open mic nights." },
        { title: "Eco-friendly Lifestyle", prompt: "Create a mobile app with tips for an eco-friendly lifestyle." },
        { title: "City Landmark Reviews", prompt: "Develop a platform for reviewing and discussing city landmarks." },
        { title: "Homemade Soap Recipes", prompt: "Design a mobile app for DIY soap-making tutorials." },
        { title: "Virtual Choir Practice", prompt: "Build a web tool for organizing and conducting virtual choir practices." },
        { title: "Local Adventure Quests", prompt: "Design a mobile game based on real-world local adventures and quests." },
        { title: "Family Recipe Book", prompt: "Develop a digital platform for families to archive and share their recipes." },
        { title: "Study Group Organizer", prompt: "Create a web app for organizing student study groups." },
        { title: "Local Dance Classes", prompt: "Design a mobile app for discovering and joining local dance classes." },
        { title: "Eco-friendly Travel Guide", prompt: "Build a digital platform for eco-friendly travel tips and destinations." }
    ];

    // Picks a number between 0-projectIdeas.length and returns the project at the chosen random index from projectIdeas
    const getRandomProject = () => {
        const randomIndex = Math.floor(Math.random() * projectIdeas.length);
        return projectIdeas[randomIndex];
    }

    const [reveal, setReveal] = useState(chosenProject ? true : false)
    const [randomProject, setRandomProject] = useState(chosenProject ? chosenProject : getRandomProject());

    const handleNewIdeaClick = () => {
        setRandomProject(getRandomProject());
    };

    return (
        <div className="p-6 space-y-12">

            {reveal == false ?

                <>
                    <div className="text-center text-black text-base font-semibold">All out of ideas? Click below for a stellar idea!</div>

                    <div className='flex justify-center'>
                        <svg width="168" height="117" viewBox="0 0 168 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M138.207 23.0109C134.658 16.8965 125.27 11.1646 100.992 17.549C92.8893 11.9575 83.4113 8.68905 73.5842 8.09752C63.7571 7.50599 53.9554 9.61391 45.2403 14.1931C36.5251 18.7722 29.2287 25.6481 24.1408 34.0764C19.053 42.5046 16.3676 52.1641 16.3754 62.009C16.3754 63.359 16.4241 64.6977 16.5216 66.0252C-1.30964 83.8677 -1.00588 94.859 2.56037 101.007C5.91287 106.79 12.6066 109.259 21.2579 109.259C26.7647 109.259 33.0704 108.258 39.7922 106.497C47.8969 112.081 57.3741 115.342 67.1985 115.927C72.5479 116.246 77.8893 115.765 83.0516 114.521C84.6911 114.126 86.3126 113.654 87.9105 113.106C90.5214 112.211 93.0695 111.114 95.5308 109.819C104.241 105.238 111.533 98.3615 116.617 89.9346C121.701 81.5076 124.384 71.8508 124.375 62.009C124.375 60.6534 124.325 59.3146 124.223 57.9815C132.273 49.8927 137.645 42.1134 139.411 35.4815C140.997 29.6202 139.63 25.4465 138.207 23.0109ZM70.3754 21.509C79.5486 21.5214 88.4468 24.6428 95.6175 30.3639C102.788 36.0849 107.808 44.0676 109.857 53.009C101.875 60.1696 91.1879 67.9659 78.2054 75.4302C65.9766 82.4559 53.7085 88.0077 42.7172 91.5459C36.7983 85.9931 32.6841 78.7901 30.9083 70.8709C29.1324 62.9518 29.7768 54.6817 32.7577 47.1331C35.7387 39.5846 40.9189 33.1057 47.6264 28.5367C54.334 23.9677 62.2595 21.5193 70.3754 21.509ZM14.2322 94.2346C13.8891 93.6327 14.1366 89.6109 20.2341 82.0227C22.128 86.7506 24.6828 91.186 27.8222 95.1965C18.1304 96.6646 14.6035 94.8646 14.2322 94.2346ZM70.3754 102.509C66.0631 102.51 61.7786 101.818 57.6854 100.461C67.0576 96.6464 76.1576 92.1942 84.9216 87.1359C93.6527 82.1565 102.03 76.5801 109.992 70.4465C108.048 79.514 103.056 87.6416 95.8473 93.4756C93.389 95.4651 90.7236 97.147 87.9105 98.5C86.3338 99.2583 84.7107 99.9134 83.0516 100.461C78.9906 101.803 74.714 102.504 70.3754 102.509ZM126.383 31.9996C125.663 34.6884 123.678 38.114 120.539 42.0121C118.645 37.2779 116.088 32.8367 112.945 28.8215C121.85 27.4884 125.978 28.8215 126.53 29.7834C126.625 29.9465 126.743 30.6665 126.383 31.9996Z" fill="#BCBBC2" />
                            <circle cx="61.8926" cy="50.2159" r="4.34483" fill="#BCBBC2" />
                            <circle cx="87.4444" cy="40.6983" r="4.34483" fill="#BCBBC2" />
                            <path d="M94.6262 55C94.6262 55 91.7512 60.6545 84.7512 63.496C77.7512 66.3375 71.6262 64.2802 71.6262 64.2802" stroke="#BCBBC2" stroke-width="8" stroke-linecap="round" />
                            <path d="M53.6262 47.9573C53.6262 47.9573 54.8158 45.7196 57.7124 44.5952C60.6089 43.4707 63.1434 44.2848 63.1434 44.2848" stroke="#BCBBC2" stroke-width="2.00001" stroke-linecap="round" />
                            <path d="M76.6262 31.9573C76.6262 31.9573 77.8158 29.7196 80.7124 28.5952C83.6089 27.4707 86.1434 28.2848 86.1434 28.2848" stroke="#BCBBC2" stroke-width="2.00001" stroke-linecap="round" />
                            <path d="M152.374 4L154.874 9.5L160.374 12L154.874 14.5L152.374 20L149.874 14.5L144.374 12L149.874 9.5L152.374 4ZM152.374 8.83L151.374 11L149.204 12L151.374 13L152.374 15.17L153.374 13L155.544 12L153.374 11L152.374 8.83ZM162.374 9L161.114 6.26L158.374 5L161.114 3.75L162.374 1L163.624 3.75L166.374 5L163.624 6.26L162.374 9ZM162.374 23L161.114 20.26L158.374 19L161.114 17.75L162.374 15L163.624 17.75L166.374 19L163.624 20.26L162.374 23Z" fill="#BCBBC2" />
                        </svg>

                    </div>

                    <button onClick={() => setReveal(true)} className="w-full h-10 px-3.5 py-2 rounded-lg border border-rose-500 justify-center items-center gap-2 inline-flex">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99999 2.6665L7.66666 6.33317L11.3333 7.99984L7.66666 9.6665L5.99999 13.3332L4.33332 9.6665L0.666656 7.99984L4.33332 6.33317L5.99999 2.6665ZM5.99999 5.8865L5.33332 7.33317L3.88666 7.99984L5.33332 8.6665L5.99999 10.1132L6.66666 8.6665L8.11332 7.99984L6.66666 7.33317L5.99999 5.8865ZM12.6667 5.99984L11.8267 4.17317L9.99999 3.33317L11.8267 2.49984L12.6667 0.666504L13.5 2.49984L15.3333 3.33317L13.5 4.17317L12.6667 5.99984ZM12.6667 15.3332L11.8267 13.5065L9.99999 12.6665L11.8267 11.8332L12.6667 9.99984L13.5 11.8332L15.3333 12.6665L13.5 13.5065L12.6667 15.3332Z" fill="#ED4068" />
                        </svg>

                        <div className=" text-rose-500 font-semibold">Give me something cosmic!</div>
                    </button>
                </>
                :
                <>
                    <div className="w-[668px] text-black text-base font-semibold">Try this:</div>

                    <div className="w-[568px] h-[104px] flex-col justify-start items-center gap-6 inline-flex">
                        <div className="whitespace-normal  text-[32px]">{randomProject.prompt}</div>
                    </div>

                    <div className="w-[668px] font-semibold">Like this idea?</div>

                    <div className="w-[668px] h-10 space-x-2 gap-8 flex">
                        <div className="w-72 h-10 px-3.5 py-2 rounded-lg border border-rose-500 justify-center items-center gap-2 flex">
                            <button onClick={() => handleNewIdeaClick()} className="flex justify-center items-center gap-2 text-rose-500 text-base font-semibold">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2667 4.23326C11.7079 3.66944 11.0296 3.23833 10.2819 2.97179C9.5342 2.70524 8.73616 2.61005 7.94672 2.69326C5.50005 2.93993 3.48672 4.92659 3.21339 7.37326C2.84672 10.6066 5.34672 13.3333 8.50005 13.3333C9.50679 13.3333 10.4929 13.0476 11.3437 12.5095C12.1946 11.9714 12.8753 11.2029 13.3067 10.2933C13.5201 9.84659 13.2001 9.33326 12.7067 9.33326C12.4601 9.33326 12.2267 9.46659 12.1201 9.68659C11.733 10.5193 11.071 11.1932 10.2453 11.5951C9.4197 11.997 8.48086 12.1023 7.58672 11.8933C6.10672 11.5666 4.91339 10.3599 4.60005 8.87993C4.46834 8.29477 4.46987 7.68748 4.60452 7.10299C4.73917 6.5185 5.0035 5.97176 5.37796 5.50321C5.75241 5.03466 6.22742 4.65628 6.76783 4.39607C7.30825 4.13586 7.90025 4.00048 8.50005 3.99993C9.60672 3.99993 10.5934 4.45993 11.3134 5.18659L10.3067 6.19326C9.88672 6.61326 10.1801 7.33326 10.7734 7.33326H13.1667C13.5334 7.33326 13.8334 7.03326 13.8334 6.66659V4.27326C13.8334 3.67993 13.1134 3.37993 12.6934 3.79993L12.2667 4.23326Z" fill="#ED4068" />
                                </svg>
                                Give me another</button>
                        </div>
                        <div className="w-72 h-10 px-3.5 py-2 bg-rose-500 rounded-lg border border-rose-500 justify-center items-center gap-2 flex">
                            <button onClick={() => {
                                setChosenProject(randomProject)
                                setActiveDisplay('create')
                            }} className="flex justify-center items-center gap-2 text-white text-base font-semibold">
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66675 8.6665C3.85548 8.80778 4.96211 9.34486 5.80859 10.1913C6.65506 11.0378 7.19214 12.1444 7.33341 13.3332C7.92269 12.9934 8.41561 12.5091 8.76557 11.9258C9.11552 11.3425 9.31096 10.6797 9.33341 9.99984C10.4528 9.60605 11.4303 8.88917 12.1423 7.93984C12.8543 6.99052 13.2688 5.8514 13.3334 4.6665C13.3334 4.13607 13.1227 3.62736 12.7476 3.25229C12.3726 2.87722 11.8638 2.6665 11.3334 2.6665C10.1485 2.73111 9.00939 3.14561 8.06007 3.8576C7.11075 4.5696 6.39387 5.5471 6.00008 6.6665C5.32026 6.68895 4.65739 6.88439 4.07412 7.23435C3.49086 7.58431 3.00647 8.07722 2.66675 8.6665Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.6667 9.33301C3.97286 9.72472 3.41181 10.3147 3.05547 11.0274C2.69914 11.7401 2.56377 12.5429 2.6667 13.333C3.45681 13.4359 4.25965 13.3006 4.97232 12.9442C5.68498 12.5879 6.27499 12.0269 6.6667 11.333M9.33337 5.99967C9.33337 6.17649 9.40361 6.34605 9.52863 6.47108C9.65366 6.5961 9.82322 6.66634 10 6.66634C10.1768 6.66634 10.3464 6.5961 10.4714 6.47108C10.5965 6.34605 10.6667 6.17649 10.6667 5.99967C10.6667 5.82286 10.5965 5.65329 10.4714 5.52827C10.3464 5.40325 10.1768 5.33301 10 5.33301C9.82322 5.33301 9.65366 5.40325 9.52863 5.52827C9.40361 5.65329 9.33337 5.82286 9.33337 5.99967Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Let's make it a project. Blast off!</button>
                        </div>
                    </div>
                </>

            }

        </div>
    )
}
