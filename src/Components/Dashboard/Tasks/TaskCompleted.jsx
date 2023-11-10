import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function TaskCompleted({ task }) {

  const dispatch = useDispatch()

  const [isMenuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state) => state.user)

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
    const url = BACK_END_URL + `/api/deletetask/${task.id}`
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

  const undoTask = async () => {

    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/undotask/${task.id}`
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

  // const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setMenuOpen(false);
  //     }
  //   };

  //   window.addEventListener('click', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-2">
      <div className="flex items-center">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="carbon:checkmark">
            <path id="Vector" d="M6.12501 11.6431L0.500008 6.01811L2.375 4.14312L6.12501 8L13.7319 0.5L15.5 2.26811L6.12501 11.6431Z" fill="#FF0000" />
          </g>
        </svg>

        <h3 className="font-semibold ml-4 text-lg text-left line-through">
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
                <button onClick={() => undoTask()}>Undo</button>
              </li>
              <li className="cursor-pointer hover-bg-gray-100 p-2" onClick={toggleMenu}>
                <button onClick={() => deleteTask()}>Delete</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center mt-2">
        <p className="ml-2 text-left line-through">
          Due Date: {task.duedate}
        </p>
      </div>

      </div>
      <p className="ml-8 text-left line-through">
        Notes: {task.notes}
      </p>
    </div>
  );
}
