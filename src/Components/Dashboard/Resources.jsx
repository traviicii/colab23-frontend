import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Links from './Links';
import NewLinkModal from './NewLinkModal';
import { setUserProjectInspiration, setUserProjectLinks, setUserProjectResources } from '../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function Resources() {

  useEffect(() => { getResources() }, [])

  const dispatch = useDispatch()
  const links = useSelector((state) => state.user.project_links)
  const resources = useSelector((state) => state.user.project_resources)
  const inspiration = useSelector((state) => state.user.project_inspiration)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  // const [links, setLinks] = useState([])
  // const [resources, setResources] = useState([])
  // const [inspiration, setInspiration] = useState([])


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
          // setLinks(data.links)
          dispatch(setUserProjectLinks(data.links))
        }
        if (data.resources) {
          // setResources(data.resources)
          dispatch(setUserProjectResources(data.resources))
        }
        if (data.inspiration) {
          // setInspiration(data.inspiration)
          dispatch(setUserProjectInspiration(data.inspiration))
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

  const showHelpfulResources = () => {
    return resources?.map((resource, index) => <Links key={index} item={resource} title={resource.title} section={resource.content} type={"resources"} getResources={getResources} />)
  }

  const showInspiration = () => {
    return inspiration?.map((inspo, index) => <Links key={index} item={inspo} title={inspo.title} section={inspo.content} type={"inspiration"} getResources={getResources} />)
  }

  const handleModalType = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  return (
    <div className="flex justify-center space-x-4">


      {/* Project Links */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold">Project Links</h2>

        <div>
          <button onClick={() => handleModalType('Project Link')} className="w-full h-10 px-3.5 py-2 mt-4 rounded-lg hover:bg-rose-300 border border-rose-500 justify-center items-center gap-2 inline-flex">
            <div className="text-black text-base font-semibold font-['Outfit']">+Add another Link</div>
          </button>
        </div>

        {/* Modal - I just put it here, it could sit anywhere tho */}
        <NewLinkModal type={modalType} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} getResources={getResources} />

        {showProjectLinks()}

      </div>

      {/* Resources */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold">Helpful Resources</h2>

        <button onClick={() => handleModalType('Helpful Resource')} className="w-full h-10 px-3.5 py-2 mt-4 rounded-lg hover:bg-rose-300 border border-rose-500 justify-center items-center gap-2 inline-flex">
          <div className="text-black text-base font-semibold font-['Outfit']">+Add another Helpful Resource</div>
        </button>
        {showHelpfulResources()}

      </div>

      {/* Inspirations */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold">Inspirations</h2>

        <button onClick={() => handleModalType('Inspiration')} className="w-full h-10 px-3.5 py-2 mt-4 rounded-lg hover:bg-rose-300 border border-rose-500 justify-center items-center gap-2 inline-flex">
          <div className="text-black text-base font-semibold">+Add another Inspiration</div>
        </button>
        {showInspiration()}

      </div>
    </div>
  );
}
