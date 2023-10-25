import React, { useEffect, useState } from 'react'

export default function Links({ item, title, section }) {

    // State to track editing state for each section
    const [editingState, setEditingState] = useState({});

    // State to store input values for each section
    const [inputValues, setInputValues] = useState({});

    // Function to start editing for a specific section
    const startEditing = (section) => {
        setEditingState({ ...editingState, [section]: true });
    };

    // Function to save the input value for a specific section
    const saveInput = (section) => {
        setEditingState({ ...editingState, [section]: false });

    };

    // useEffect(()=>{set})

    return (
        <div className="project-listing flex mt-8">
            <p className="text-left flex items-center w-28">{title}:</p>
            {editingState[section] ? (
                // Input box and "Save" button when editing
                <div className="flex items-center ml-8">
                    <input
                        type="text"
                        value={inputValues[section] || ''}
                        onChange={(e) => setInputValues({ ...inputValues, [section]: e.target.value })}
                        placeholder={`Enter ${title} URL`}
                    />
                    <button className='rounded pr-1 pl-1 shadow' onClick={() => saveInput(section)} style={{ backgroundColor: '#ecafbd' }}>Save</button>
                </div>
            ) : (
                // "Click to Enter" link when not editing
                <a onClick={() => startEditing(section)} className="flex items-center ml-8 hover:bg-gray-100 hover:rounded">
                    {inputValues[section] || `${section}`}
                </a>
            )}
        </div>
    )
}
