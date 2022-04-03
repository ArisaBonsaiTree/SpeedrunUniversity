import React, {useState, useEffect, createContext, useContext} from 'react';
//import Class_BB from '../classBB/Class_BB'

import './Blackboard.scss'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'


import StudentModule from './StudentModule'

function Blackboard() {
  
  const {getUser, user} = useContext(UserContext)
  // ! This seems to have fixed the refreshing breaking bug that makes user is null
  // TODO: Refreshing the page sends two request
  

  // useEffect(() => {
  //   getUserInfo()
  // },[])
  
  // async function getUserInfo(){
  //   const userData = await getUser
  //   setUserRes(userData)

  // }

  //const[userRes, setUserRes] = useState(getUser) 



  return (
    <section className='blackboard'>
      {/* ! IMPORTANT THIS IS HOW WE PREVENT NULL WHEN REFRESHING THE PAGE FROM BREAKIGN THE WEBSITE */}
        {user === null || user.username === null ? 
          (
            'Loading'
          ) 
        :
          (
            <>
              {user.semesterOne === undefined ? 
                (
                  <>
                    <Link to='/classRegister'>Please register for a class</Link>
                  </>
                ) : 
                (
                  <StudentModule userData={user}/>
                )
              }
            </>
            
            
          )
        }
    </section>
    
  )
}

export default Blackboard