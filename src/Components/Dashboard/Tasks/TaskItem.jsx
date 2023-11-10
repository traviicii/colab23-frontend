import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function TaskItem({ task, taskId, onComplete }) {
  // State variables for managing menu visibility and task completion
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const tasks = useSelector((state) => state.tasks.tasks);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => { }, [tasks])

  // Function to toggle the task menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Reference to the task menu for click outside detection
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close the menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    // Cleanup: remove the event listener when finished
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const deleteTask = async () => {

    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/deletetask/${taskId}`
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (data.status === 'ok') {
      console.log(data.message)
      //Updates the task state in order to re-render with updated
      dispatch(addTask(data.tasks))
    }
  }

  const updateTaskCompleted = async () => {
    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/updatecompletedtask/${taskId}`
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data)
      dispatch(addTask(data.tasks))
    } catch {
      console.log("Error sending completed task to database.")
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 accent-pink-500"
          onChange={() => {
            setIsChecked(true)
            updateTaskCompleted()
          }
          }
          checked={isChecked}
        // disabled={isChecked}
        />
        <h3 className={`font-semibold text-lg text-left ${isChecked ? 'line-through' : ''}`}>
          {task.title}
        </h3>
      </div>


      <div className="flex items-center mt-2">
        <div className="relative" ref={menuRef}>
          <div
            className="kebab-menu cursor-pointer hover-bg-gray-100"
            onClick={toggleMenu}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Kebab-Menu</title>
              <g id="Kebab-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Container" x="0" y="0" width="24" height="24"></rect>
                <path
                  d="M12,6 C12.5522847,6 13,5.55228475 13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 C11,5.55228475 11.4477153,6 12,6 Z"
                  id="shape-03"
                  stroke="#030819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0,0"
                ></path>
                <path
                  d="M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z"
                  id="shape-03"
                  stroke="#030819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0,0"
                ></path>
                <path
                  d="M12,20 C12.5522847,20 13,19.5522847 13,19 C13,18.4477153 12.5522847,18 12,18 C11.4477153,18 11,18.4477153 11,19 C11,19.5522847 11.4477153,20 12,20 Z"
                  id="shape-03"
                  stroke="#030819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0,0"
                ></path>
              </g>
            </svg>
          </div>
          {isMenuOpen && (
            <div className="menu-dropdown absolute whitespace-nowrap z-10 mt-2 right-0 w-fit bg-white border border-stone-600 rounded-lg shadow-lg">
              <ul className="p-2">
                <li className="cursor-pointer hover-bg-gray-100 p-2" onClick={toggleMenu}>
                  <button onClick={() => deleteTask()}>Delete</button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <p className={`ml-2 text-gray-500 text-left ${isChecked ? 'line-through' : ''}`}>
          Due Date: {task.duedate}
        </p>
      </div>
      <p className={`text-left ml-7 ${isChecked ? 'line-through' : ''}`}>
        Notes: {task.notes}
      </p>
    </div>
  );
}
