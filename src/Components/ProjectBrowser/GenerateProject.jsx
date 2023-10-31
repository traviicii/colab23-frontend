import React, { useEffect, useState } from 'react'

export default function GenerateProject({ setActiveDisplay, chosenProject, setChosenProject, isOpen }) {

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

    const getRandomProject = () => {
        const randomIndex = Math.floor(Math.random() * projectIdeas.length);
        return projectIdeas[randomIndex];
    }

    const [reveal, setReveal] = useState(chosenProject ? true : false)
    const [randomProject, setRandomProject] = useState(chosenProject ? chosenProject : getRandomProject());

    // if (isOpen == false) {
    //     setReveal(false)
    //     setChosenProject(null)
    // }

    // useEffect(() => {
    //     setReveal(false)
    //     setChosenProject(null)
    // }, isOpen)

    const handleNewIdeaClick = () => {
        setRandomProject(getRandomProject());
    };

    return (
        <div className="p-6 space-y-12">

            {reveal == false ?

                <>
                    <div className="text-center text-black text-base font-semibold">All out of ideas? Click below for a stellar idea!</div>

                    <div className='flex justify-center'>
                        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M139.832 33.0021C136.283 26.8877 126.894 21.1558 102.617 27.5402C94.514 21.9487 85.0359 18.6803 75.2088 18.0887C65.3817 17.4972 55.58 19.6051 46.8649 24.1843C38.1498 28.7634 30.8533 35.6393 25.7655 44.0676C20.6776 52.4959 17.9922 62.1553 18 72.0002C18 73.3502 18.0487 74.6889 18.1462 76.0164C0.314996 93.8589 0.618749 104.85 4.185 110.998C7.5375 116.781 14.2313 119.25 22.8825 119.25C28.3894 119.25 34.695 118.249 41.4169 116.488C49.5215 122.072 58.9987 125.333 68.8231 125.918C78.6475 126.504 88.445 124.392 97.1554 119.81C105.866 115.229 113.158 108.353 118.242 99.9258C123.326 91.4988 126.009 81.842 126 72.0002C126 70.6446 125.949 69.3058 125.848 67.9727C133.898 59.8839 139.269 52.1046 141.036 45.4727C142.622 39.6114 141.255 35.4377 139.832 33.0021ZM72 31.5002C81.1733 31.5126 90.0714 34.6341 97.2421 40.3551C104.413 46.0761 109.433 54.0588 111.482 63.0002C103.5 70.1608 92.8125 77.9571 79.83 85.4214C67.6012 92.4471 55.3331 97.9989 44.3419 101.537C38.4229 95.9843 34.3088 88.7813 32.5329 80.8622C30.7571 72.943 31.4014 64.6729 34.3824 57.1243C37.3634 49.5758 42.5435 43.0969 49.251 38.5279C55.9586 33.9589 63.8842 31.5105 72 31.5002ZM15.8569 104.226C15.5137 103.624 15.7613 99.6021 21.8588 92.014C23.7527 96.7418 26.3075 101.177 29.4469 105.188C19.755 106.656 16.2281 104.856 15.8569 104.226ZM72 112.5C67.6877 112.501 63.4033 111.81 59.31 110.453C68.6823 106.638 77.7823 102.185 86.5462 97.1271C95.2774 92.1477 103.654 86.5713 111.617 80.4377C109.673 89.5052 104.681 97.6329 97.4719 103.467C90.2634 109.301 81.2736 112.489 72 112.5ZM128.008 41.9908C127.288 44.6796 125.302 48.1052 122.164 52.0033C120.27 47.2691 117.713 42.8279 114.57 38.8127C123.474 37.4796 127.603 38.8127 128.154 39.7746C128.25 39.9377 128.368 40.6577 128.008 41.9908Z" fill="#BCBBC2" />
                            <circle cx="63.5172" cy="60.2071" r="4.34483" fill="#BCBBC2" />
                            <circle cx="92.0689" cy="50.69" r="4.34483" fill="#BCBBC2" />
                            <path d="M65.3793 79.6552C65.3793 79.6552 70.1379 70.7047 81.7241 66.2069C93.3103 61.7091 103.448 64.9655 103.448 64.9655" stroke="#BCBBC2" stroke-width="8" stroke-linecap="round" />
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
                                    <path d="M2.66675 8.6665C3.85548 8.80778 4.96211 9.34486 5.80859 10.1913C6.65506 11.0378 7.19214 12.1444 7.33341 13.3332C7.92269 12.9934 8.41561 12.5091 8.76557 11.9258C9.11552 11.3425 9.31096 10.6797 9.33341 9.99984C10.4528 9.60605 11.4303 8.88917 12.1423 7.93984C12.8543 6.99052 13.2688 5.8514 13.3334 4.6665C13.3334 4.13607 13.1227 3.62736 12.7476 3.25229C12.3726 2.87722 11.8638 2.6665 11.3334 2.6665C10.1485 2.73111 9.00939 3.14561 8.06007 3.8576C7.11075 4.5696 6.39387 5.5471 6.00008 6.6665C5.32026 6.68895 4.65739 6.88439 4.07412 7.23435C3.49086 7.58431 3.00647 8.07722 2.66675 8.6665Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.6667 9.33301C3.97286 9.72472 3.41181 10.3147 3.05547 11.0274C2.69914 11.7401 2.56377 12.5429 2.6667 13.333C3.45681 13.4359 4.25965 13.3006 4.97232 12.9442C5.68498 12.5879 6.27499 12.0269 6.6667 11.333M9.33337 5.99967C9.33337 6.17649 9.40361 6.34605 9.52863 6.47108C9.65366 6.5961 9.82322 6.66634 10 6.66634C10.1768 6.66634 10.3464 6.5961 10.4714 6.47108C10.5965 6.34605 10.6667 6.17649 10.6667 5.99967C10.6667 5.82286 10.5965 5.65329 10.4714 5.52827C10.3464 5.40325 10.1768 5.33301 10 5.33301C9.82322 5.33301 9.65366 5.40325 9.52863 5.52827C9.40361 5.65329 9.33337 5.82286 9.33337 5.99967Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Let's make it a project. Blast off!</button>
                        </div>
                    </div>
                </>

            }

        </div>
    )
}
