import React, { useState } from 'react';

export default function MeetingModal({ isOpen, closeModal, onSave }) {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDateTime, setMeetingDateTime] = useState('');
  const [meetingNotes, setMeetingNotes] = useState('');

  const handleSave = () => {
    const newMeeting = {
      meetingTitle,
      meetingDateTime,
      meetingNotes,
    };
    onSave(newMeeting);
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-70">
          {/* Modal content */}
          <div className="relative w-full max-w-2xl max-h-full mx-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t border-rose-500">
                <div className='mr-3'>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 6.66666L19.1667 15.8333L28.3334 20L19.1667 24.1667L15.0001 33.3333L10.8334 24.1667L1.66675 20L10.8334 15.8333L15.0001 6.66666ZM15.0001 14.7167L13.3334 18.3333L9.71675 20L13.3334 21.6667L15.0001 25.2833L16.6667 21.6667L20.2834 20L16.6667 18.3333L15.0001 14.7167ZM31.6667 15L29.5667 10.4333L25.0001 8.33332L29.5667 6.24999L31.6667 1.66666L33.7501 6.24999L38.3334 8.33332L33.7501 10.4333L31.6667 15ZM31.6667 38.3333L29.5667 33.7667L25.0001 31.6667L29.5667 29.5833L31.6667 25L33.7501 29.5833L38.3334 31.6667L33.7501 33.7667L31.6667 38.3333Z" fill="black" />
                  </svg>

                </div>
                <h3 className="text-xl font-semibold">
                  Add New Meeting Information
                </h3>
                <button
                  type="button"
                  className="bg-transparent hover:bg-rose-300 hover:shadow-inner rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  onClick={closeModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Enter Meeting Title"
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Enter the Date/Time"
                    onChange={(e) => setMeetingDateTime(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Enter Any Notes"
                    onChange={(e) => setMeetingNotes(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 "
                  />
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-rose-500 rounded-b">
                <button
                  type="button"
                  className="bg-rose-500 hover:bg-rose-300 hover:shadow-inner focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-white border-rose-500 hover:bg-rose-300 hover:shadow-inner focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus-z-10"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
