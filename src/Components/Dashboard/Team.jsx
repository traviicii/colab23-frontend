import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProjectTeam } from '../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function Team() {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const team = useSelector((state) => state.user.project_team)

  // const [team, setTeam] = useState([])

  useEffect(()=> {getTeam()}, [])
  
  const getTeam = async () => {
    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/getteam/${user.project.id}`
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
        // setTeam(data.members)
        if (team != data.members){
          dispatch(setUserProjectTeam(data.members))
        }
      }
      else {
        console.log(data.message)
      }
    }
    catch {
      console.log("Couldn't get team info.")
    }
  }
  
  const showTeam = () => {
    return team.map((member, index) => <TeamMember key={index}  member={member}/>)
  }

  return (
    <div className="team-container flex">
      {showTeam()}
    </div>
  );
}
