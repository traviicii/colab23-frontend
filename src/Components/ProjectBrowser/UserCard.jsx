import React from 'react'

export default function UserCard() {
  return (
    <div className='ml-6 mt-6'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <div className="flex justify-center items-center">
          <img className="w-1/2 h-1/2" src="https://picsum.photos/200/200" alt="" />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Team Member Name</h5>
        </a>
        <p>Location: City, State, Country, Timezone</p>
        <p className="mt-4 flex flex-wrap">Interests:</p>
        <div className="mb-3 flex flex-wrap">
          <div className="rounded-lg pr-4 pl-4 pt-2 pb-2 text-center border border-gray-300 bg-white mr-2 mb-2">
            Education
          </div>
          <div className="rounded-lg pr-4 pl-4 pt-2 pb-2 text-center border border-gray-300 bg-white mr-2 mb-2">
            Healthcare
          </div>
          <div className="rounded-lg pr-4 pl-4 pt-2 pb-2 text-center border border-gray-300 bg-white mb-2">
            Finance
          </div>
        </div>
        <div className="flex mb-2 mt-6"> 
          <div className=""> 
            <p>Years of Experience</p>
            <p># of Years</p>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="">About:</h6>
          <div className="w-full">
            <p>Description goes here...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
