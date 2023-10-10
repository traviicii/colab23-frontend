import React from 'react';

export default function WelcomeDone() {
    return (
        <div className="professional-background-container">
            <div className="flex items-center justify-center">
                <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10">
                    <div className="mb-4 flex items-center">
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
                        >
                            Take Me to My Dashboard
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <a className="text-blue-500 hover:underline text-md underline" href="/">
                            Go Back Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
