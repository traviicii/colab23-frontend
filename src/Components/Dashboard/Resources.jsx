import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Links from './Links';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function Resources() {
  // // State to track editing state for each section
  // const [editingState, setEditingState] = useState({});

  // // State to store input values for each section
  // const [inputValues, setInputValues] = useState({});

  // // Function to start editing for a specific section
  // const startEditing = (section) => {
  //   setEditingState({ ...editingState, [section]: true });
  // };

  // // Function to save the input value for a specific section
  // const saveInput = (section) => {
  //   setEditingState({ ...editingState, [section]: false });

  // };

  // Function to create a link section with input box and "Save" button
  // const createLinkSection = (title, section) => {
  //   return (
  //     <div className="project-listing flex mt-8">
  //       <p className="text-left flex items-center w-28">{title}:</p>
  //       {editingState[section] ? (
  //         // Input box and "Save" button when editing
  //         <div className="flex items-center ml-8">
  //           <input
  //             type="text"
  //             value={inputValues[section] || ''}
  //             onChange={(e) => setInputValues({ ...inputValues, [section]: e.target.value })}
  //             placeholder={`Enter ${title} URL`}
  //           />
  //           <button className='rounded pr-1 pl-1 shadow' onClick={() => saveInput(section)} style={{ backgroundColor: '#ecafbd' }}>Save</button>
  //         </div>
  //       ) : (
  //         // "Click to Enter" link when not editing
  //         <a onClick={() => startEditing(section)} className="flex items-center ml-8 hover:bg-gray-100 hover:rounded">
  //           {inputValues[section] || `Click to Enter ${title}`}
  //         </a>
  //       )}
  //     </div>
  //   );
  // };

  useEffect(() => { getResources() }, [])

  const [links, setLinks] = useState([])
  const [resources, setResources] = useState([])
  const [inspiration, setInspiration] = useState([])

  const user = useSelector((state) => state.user)

  const getResources = async () => {
    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/getresources/${user.data.current_project_id}`
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (data.status === "ok") {
        console.log(data)
        if (data.links) {
          setLinks(data.links)
        }
        if (data.resources) {
          setResources(data.resources)
        }
        if (data.inspiration) {
          setInspiration(data.inspiration)
        }
      }
      else {
        console.log(data.message)
      }
    } catch {
      console.log("Couldn't get resources data from database. Make sure Flask is running.")
    }
  }

  const showProjectLinks = () => {
    return links?.map((link, index) => <Links key={index} item={link} title={link.title} section={link.content} type={"links"} getResources={getResources} />)
  }
  // const showProjectLinks = () => {
  //   return links?.map((resource, index) => <LinksRedone key={index} resource={resource} />)
  // }

  const showHelpfulResources = () => {
    return resources?.map((resource, index) => <Links key={index} item={resource} title={resource.title} section={resource.content} type={"resources"} getResources={getResources} />)
  }
  // const showHelpfulResources = () => {
  //   return resources?.map((resource, index) => <LinksRedone key={index} resource={resource} />)
  // }

  const showInspiration = () => {
    return inspiration?.map((inspo, index) => <Links key={index} item={inspo} title={inspo.title} section={inspo.content} type={"inspiration"} getResources={getResources} />)
  }
  // const showInspiration = () => {
  //   return inspiration?.map((resource, index) => <LinksRedone key={index} resource={resource} />)
  // }

  return (
    <div className="flex justify-center">
      {/* Project Links */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg text-center mx-4">
        <h2 className="text-xl font-semibold">Project Links</h2>
        {showProjectLinks()}
        {/* {createLinkSection('Figma', 'figma')}
        {createLinkSection('Github', 'github')}
        {createLinkSection('Trello', 'trello')}
        {createLinkSection('Google Drive', 'drive')}
        {createLinkSection('Discord/Slack', 'discord')}
        {createLinkSection('Meeting', 'meeting')} */}
      </div>

      {/* Resources */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg text-center mx-4">
        <h2 className="text-xl font-semibold">Helpful Resources</h2>
        {showHelpfulResources()}
        {/* {createLinkSection('Resource 1', 'resource1')}
        {createLinkSection('Resource 2', 'resource2')}
        {createLinkSection('Resource 3', 'resource3')}
        {createLinkSection('Resource 4', 'resource4')}
        {createLinkSection('Resource 5', 'resource5')}
        {createLinkSection('Resource 6', 'resource6')} */}
      </div>

      {/* Inspirations */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg text-center mx-4">
        <h2 className="text-xl font-semibold">Inspirations</h2>
        {showInspiration()}
        {/* {createLinkSection('Inspiration 1', 'inspiration1')}
        {createLinkSection('Inspiration 2', 'inspiration2')}
        {createLinkSection('Inspiration 3', 'inspiration3')}
        {createLinkSection('Inspiration 4', 'inspiration4')}
        {createLinkSection('Inspiration 5', 'inspiration5')}
        {createLinkSection('Inspiration 6', 'inspiration6')} */}

      </div>
    </div>
  );
}
