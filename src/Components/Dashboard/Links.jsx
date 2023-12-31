import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function Links({ item, title, section, type, getResources }) {

    const user = useSelector((state) => state.user)

    // State to track editing state for each section
    const [editingState, setEditingState] = useState(false);

    // State to store input values for each section
    const [inputValues, setInputValues] = useState(section);
    const [name, setName] = useState(title)

    // Function to start editing for a specific section
    const startEditing = () => {
        setEditingState(true);
    };

    // Function to save the input value for a specific section
    const saveInput = async () => {
        setEditingState(false);
        await updateResources()
        await getResources()
    };

    const updateResources = async () => {
        const token = user.data.apitoken
        const url = BACK_END_URL + `/api/updateresources`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                type: type,
                resource_id: item.id,
                title: name,
                content: inputValues
            })
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data)
        } catch {
            console.log("Update resource didn't work.")
        }
    }

    const deleteResources = async () => {
        const token = user.data.apitoken
        const url = BACK_END_URL + `/api/deleteresource`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                type: type,
                resource_id: item.id
            })
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data)
            setEditingState(false);
            await getResources()
        } catch {
            console.log("Delete resource didn't work.")
        }
    }

    // useEffect(()=>{set})

    return (
        <div className="project-listing flex mt-8">
            {editingState ? 
            <div className='flex items-center w-fit'>
            <input value={name} onChange={(e) => setName(e.target.value)} className="text-left w-24 mr-1 flex items-center border border-black rounded-lg "/><p>:</p>
            </div>
            :
            <p className="text-left flex items-center w-28">{title}:</p>}
            {editingState ? (
                // Input boxes and "Save"/"Delete" button when editing
                <div className="flex items-center">
                    <input
                        className='ml-2 border border-black rounded-lg pl-2'
                        type="text"
                        value={inputValues}
                        onChange={(e) => setInputValues(e.target.value)}
                    // placeholder={`Enter ${section} URL`}
                    />
                    <div>
                        <button className='rounded ml-4 pr-1 pl-1 shadow mb-1.5' style={{ backgroundColor: '#ecafbd' }} onClick={() => saveInput()}>Save</button>
                        <button className='rounded ml-4 pr-1 pl-1 shadow' style={{ backgroundColor: '#ed4068' }} onClick={() => deleteResources()}>Delete</button>
                    </div>
                </div>
            ) : (
                // "Click to Enter" link when not editing
                <div className='flex'>
                    <a className='flex items-center ml-2' href={`${section}`} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg></a>
                    <a onClick={() => startEditing()} className="flex items-center max-w-[200px] truncate ml-4 hover:bg-gray-100 hover:rounded">
                        {`${inputValues}`}
                    </a>
                </div>
            )}
        </div>
    )
}
