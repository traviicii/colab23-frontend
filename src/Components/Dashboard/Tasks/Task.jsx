import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, addMeeting } from '../../../Actions';
import TaskItem from './TaskItem';
import MeetingItem from './MeetingItem';
import TaskCompleted from './TaskCompleted';
import TaskModal from './TaskModal'; // Import TaskModal component
import MeetingModal from './MeetingModal'; // Import MeetingModal component

export default function Task() {
  // State variables for managing modals, completed tasks, and data retrieval
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const tasks = useSelector((state) => state.tasks.tasks);
  const meetings = useSelector((state) => state.meetings.meetings);
  const dispatch = useDispatch();

  // Function to open the task modal
  const openTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  // Function to close the task modal
  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  // Function to save a new task
  const saveTask = (newTask) => {
    dispatch(addTask(newTask));
    closeTaskModal();
  };

  // Function to open the meeting modal
  const openMeetingModal = () => {
    setIsMeetingModalOpen(true);
  };

  // Function to close the meeting modal
  const closeMeetingModal = () => {
    setIsMeetingModalOpen(false);
  };

  // Function to handle marking a task as completed
  const handleTaskComplete = (completedTask) => {
    setCompletedTasks([...completedTasks, completedTask]);
  };

  // Function to save a new meeting
  const saveMeeting = (newMeeting) => {
    dispatch(addMeeting(newMeeting));
    closeMeetingModal();
  };

  return (
    <div className="flex justify-center space-x-4">
      <div className="w-1/3 h-auto bg-white p-4 rounded-lg text-center">
      <div className="flex flex-col items-center mt-4">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
            <path id="Vector" d="M2.66669 16.6667C5.63851 17.0199 8.4051 18.3626 10.5213 20.4788C12.6375 22.5949 13.9802 25.3615 14.3334 28.3334C15.8066 27.484 17.0388 26.2731 17.9137 24.8149C18.7886 23.3568 19.2772 21.6996 19.3334 20C22.1319 19.0155 24.5756 17.2233 26.3556 14.85C28.1356 12.4767 29.1718 9.62892 29.3334 6.66669C29.3334 5.3406 28.8066 4.06884 27.8689 3.13115C26.9312 2.19347 25.6594 1.66669 24.3334 1.66669C21.3711 1.8282 18.5233 2.86446 16.15 4.64444C13.7767 6.42442 11.9845 8.86817 11 11.6667C9.30046 11.7228 7.64328 12.2114 6.18513 13.0863C4.72697 13.9612 3.516 15.1935 2.66669 16.6667Z" stroke="#1F1D34" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_2" d="M7.66669 18.3334C5.93208 19.3127 4.52945 20.7877 3.63862 22.5693C2.74779 24.351 2.40935 26.3581 2.6667 28.3334C4.64196 28.5907 6.64907 28.2523 8.43073 27.3614C10.2124 26.4706 11.6874 25.068 12.6667 23.3334M19.3334 10C19.3334 10.4421 19.509 10.866 19.8215 11.1786C20.1341 11.4911 20.558 11.6667 21.0000 11.6667C21.4421 11.6667 21.866 11.4911 22.1785 11.1786C22.4911 10.866 22.6667 10.4421 22.6667 10C22.6667 9.55801 22.4911 9.13409 22.1785 8.82153C21.866 8.50897 21.4421 8.33337 21.0000 8.33337C20.558 8.33337 20.1341 8.50897 19.8215 8.82153C19.509 9.13409 19.3334 9.55801 19.3334 10Z" stroke="#1F1D34" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
        <h2 className="font-bold text-lg mt-4 mb-2">What do we need to get done this week?</h2>
      </div>

        <button
          className="bg-white hover:bg-gray-200 font-bold py-1 border-2 border-black rounded w-full mt-10"
          onClick={openTaskModal}
        >
          + Add a New Task
        </button>

        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onComplete={() => handleTaskComplete(task)} />
        ))}

        {/* Task Modal */}
        <TaskModal
          isOpen={isTaskModalOpen}
          closeModal={closeTaskModal}
          onSave={saveTask}
        />
      </div>
      <div className="w-1/3 bg-white p-4 rounded-lg text-center">
      <div className="flex flex-col items-center mt-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
          <path id="Vector" d="M7.97918 16.4645C8.48264 16.9679 8.85599 17.5506 9.09924 18.1728L13.636 13.636C13.8236 13.4485 14.0779 13.3431 14.3431 13.3431C14.6084 13.3431 14.8627 13.4485 15.0502 13.636L17.8787 16.4645L17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20C16 21.0609 16.4214 22.0783 17.1716 22.8284L17.8787 23.5355L15.0502 26.364C14.8627 26.5515 14.6084 26.6569 14.3431 26.6569C14.0779 26.6569 13.8236 26.5515 13.636 26.364L9.09924 21.8272C8.72401 22.786 8.06101 23.6052 7.20136 24.1719L11.5147 28.4853C12.2649 29.2354 13.2823 29.6569 14.3431 29.6569C15.404 29.6569 16.4214 29.2354 17.1716 28.4853L20 25.6569L22.8284 28.4853C23.5786 29.2354 24.596 29.6569 25.6568 29.6569C26.7177 29.6569 27.7351 29.2354 28.4853 28.4853L32.7986 24.1719C31.9407 23.6032 31.2783 22.7847 30.9008 21.8272L26.364 26.364C26.1764 26.5515 25.9221 26.6569 25.6568 26.6569C25.3916 26.6569 25.1373 26.5515 24.9497 26.364L22.1213 23.5355L22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.9391 23.5786 17.9217 22.8284 17.1716L22.1213 16.4645L24.9497 13.636C25.1373 13.4485 25.3916 13.3431 25.6568 13.3431C25.9221 13.3431 26.1764 13.4485 26.364 13.636L30.9008 18.1728C31.2759 17.2139 31.9389 16.3947 32.7986 15.8281L28.4853 11.5147C27.7351 10.7646 26.7177 10.3431 25.6568 10.3431C24.596 10.3431 23.5786 10.7646 22.8284 11.5147L20 14.3431L17.1716 11.5147C16.4214 10.7646 15.404 10.3431 14.3431 10.3431C13.2823 10.3431 12.2649 10.7646 11.5147 11.5147L7.20136 15.8281C7.47713 16.0105 7.73735 16.2226 7.97918 16.4645ZM20 18.5858L20.7071 19.2929C20.8946 19.4804 21 19.7348 21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071L20 21.4142L19.2929 20.7071C19.1054 20.5196 19 20.2652 19 20C19 19.7348 19.1054 19.4804 19.2929 19.2929L20 18.5858ZM6.56496 17.8787C7.12757 18.4413 7.44365 19.2044 7.44365 20C7.44365 20.7956 7.12757 21.5587 6.56496 22.1213C6.00236 22.6839 5.23929 23 4.44364 23C3.648 23 2.88493 22.6839 2.32232 22.1213C1.75972 21.5587 1.44364 20.7956 1.44364 20C1.44364 19.2044 1.75972 18.4413 2.32232 17.8787C2.88493 17.3161 3.648 17 4.44364 17C5.23929 17 6.00236 17.3161 6.56496 17.8787ZM37.6777 17.8787C38.2403 18.4413 38.5563 19.2044 38.5563 20C38.5563 20.7956 38.2403 21.5587 37.6777 22.1213C37.1151 22.6839 36.352 23 35.5563 23C34.7607 23 33.9976 22.6839 33.435 22.1213C32.8724 21.5587 32.5563 20.7956 32.5563 20C32.5563 19.2044 32.8724 18.4413 33.435 17.8787C33.9976 17.3161 34.7607 17 35.5563 17C36.352 17 37.1151 17.3161 37.6777 17.8787ZM22.1213 2.32233C22.6839 2.88494 23 3.648 23 4.44365C23 5.2393 22.6839 6.00236 22.1213 6.56497C21.5587 7.12758 20.7956 7.44365 20 7.44365C19.2043 7.44365 18.4413 7.12758 17.8787 6.56497C17.3161 6.00236 17 5.2393 17 4.44365C17 3.648 17.3161 2.88494 17.8787 2.32233C18.4413 1.75972 19.2043 1.44365 20 1.44365C20.7956 1.44365 21.5587 1.75972 22.1213 2.32233ZM22.1213 33.435C22.6839 33.9976 23 34.7607 23 35.5563C23 36.352 22.6839 37.1151 22.1213 37.6777C21.5587 38.2403 20.7956 38.5563 20 38.5563C19.2043 38.5563 18.4413 38.2403 17.8787 37.6777C17.3161 37.1151 17 36.352 17 35.5563C17 34.7607 17.3161 33.9976 17.8787 33.435C18.4413 32.8724 19.2043 32.5563 20 32.5563C20.7956 32.5563 21.5587 32.8724 22.1213 33.435Z" fill="black"/>
          </g>
        </svg>
        <h2 className="font-bold text-lg mt-4">When are we meeting next?</h2>
        </div>
        <button
          className="bg-white hover:bg-gray-200 font-bold py-1 border-2 border-black rounded w-full mt-12"
          onClick={openMeetingModal}
        >
          + Propose a New Meeting
        </button>
        {meetings.map((meeting, index) => (
          <MeetingItem key={index} meeting={meeting} />
        ))}

        {/* Meeting Modal */}
        <MeetingModal
          isOpen={isMeetingModalOpen}
          closeModal={closeMeetingModal}
          onSave={saveMeeting}
        />
      </div>
      <div className="w-1/3 bg-white p-4 rounded-lg text-center">
      <div className="flex flex-col items-center mt-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Finished checkmark icon">
          <path id="Vector" d="M20 36.6666C21.3333 36.6666 22.6667 36.5 23.8333 36.1666C23.1667 35.3333 22.5 34.3333 22.1667 33.1666C21.5 33.3333 20.6667 33.3333 20 33.3333C12.6667 33.3333 6.66668 27.3333 6.66668 20C6.66668 12.6666 12.6667 6.66665 20 6.66665C21.3333 6.66665 22.5 6.83331 23.6667 7.16665L26.3333 4.49998C24.3333 3.83331 22.1667 3.33331 20 3.33331C10.8333 3.33331 3.33334 10.8333 3.33334 20C3.33334 29.1666 10.8333 36.6666 20 36.6666ZM10.8333 19.1666L13.1667 16.8333L18.3333 22L32.6667 7.66665L35 9.99998L18.3333 26.6666L10.8333 19.1666ZM31.6667 23.3333L29.5667 27.9166L25 30L29.5667 32.1L31.6667 36.6666L33.75 32.1L38.3333 30L33.75 27.9166L31.6667 23.3333Z" fill="black"/>
          </g>
        </svg>
    <h2 className="font-bold text-lg mt-4 mb-8">What have we already accomplished?</h2>
  </div>
  {completedTasks.map((completedTask, index) => (
    <TaskCompleted key={index} task={completedTask} />
  ))}
</div>

    </div>
  );
}
