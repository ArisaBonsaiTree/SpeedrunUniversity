import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Sidebar from "./components/sidebar/Sidebar";

import HomeArea from "./components/home/HomeArea";

import Register from "./components/auth/Register";
import Login from './components/auth/Login'

import Profile from "./components/sidebar/Profile";

import Blackboard from './components/blackboard/Main/Blackboard'
import ClassRegister from "./components/blackboard/courseCatalog/ClassRegister";

import StudentModule from './components/blackboard/StudentSelectedCourses/courseContent/StudentModule';

import Certificate from './components/sidebar/Certificate';

// ? We can use <Link/> anywhere in the app to redirect to a URL and call the propert COMPONENT
function RouterPage() {
    return  (
        <Router>

            <Sidebar/>
            
            <Routes className='sidebar-links'>
                <Route exact path='/' element={<HomeArea/>}/>

                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>

                <Route path='profile/:username' element={<Profile/>}/>

                <Route path='/blackboard' element={<Blackboard/>}/>
                <Route path='/classRegister' element={<ClassRegister/>}/>

                <Route path='/courses/:ClassId' element={<StudentModule/>}/>

                <Route path='/grad/:name' element={<Certificate/>}/>

            </Routes>            
        </Router>
    )
};

export default RouterPage;