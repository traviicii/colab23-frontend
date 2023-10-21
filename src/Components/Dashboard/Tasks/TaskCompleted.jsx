import React, { useState, useEffect, useRef } from 'react';

export default function TaskCompleted({ task }) {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-2">
      <div className="flex items-center">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="carbon:checkmark">
            <path id="Vector" d="M6.12501 11.6431L0.500008 6.01811L2.375 4.14312L6.12501 8L13.7319 0.5L15.5 2.26811L6.12501 11.6431Z" fill="#FF0000"/>
            </g>
        </svg>

        <h3 className={`font-semibold ml-4 text-lg text-left ${isChecked ? 'line-through' : ''}`}>
          {task.task}
        </h3>
      </div>
      <div className="flex items-center mt-2">
        <p className={`ml-8 text-left ${isChecked ? 'line-through' : ''}`}>
          Completed: {task.dueDate}
        </p>
      </div>
      <p className={`text-left ml-8 ${isChecked ? 'line-through' : ''}`}>
        Notes: {task.notes}
      </p>
    </div>
  );
}
