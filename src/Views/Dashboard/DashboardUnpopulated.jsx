import React from 'react';

export default function DashboardUnpopulated() {
  return (
    <div className="h-screen pl-20 pt-20">
      <h1 className="text-6xl font-bold pb-5">Welcome User!</h1>
      <p className="text-4xl">You currently don't have any projects!</p>

      <div className="flex flex-col items-center">
        <img
          src={process.env.PUBLIC_URL + '/assets/EmptyGif.gif'}
          alt="Empty Gif"
          className="max-w-screen-md max-h-96 mx-auto"
        />

        <div className="flex justify-center mt-10">
          <button className="m-2 px-10 py-2 bg-white text-black rounded-lg border border-black hover:bg-gray-200">
            Browse People
          </button>
          <button className="m-2 px-10 py-2 bg-white text-black rounded-lg border border-black hover:bg-gray-200">
            Browse Projects
          </button>
          <button className="m-2 px-10 py-2 bg-white text-black rounded-lg border border-black hover:bg-gray-200">
            Create a New Project
          </button>
        </div>
      </div>
    </div>
  );
}
