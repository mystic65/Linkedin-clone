import React from 'react';
import { Avatar } from '@mui/material';
import './css/sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
  return (
    <div className="sidebar">
            <div className="sidebar__profile">
                <img src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f6e93d250a6d04f4eae9f02_Backgrounds-WFU-thumbnail-(size).jpg"/>
           
                    <div className="profile__details">
                        <Avatar src={user.photoURL}/>
                        <h4>{user.displayName}</h4>
                        <p>Web Developer</p>
                    </div>

                    <div className="profile__stats">
                        <span>Who viewed your profile</span>
                        <span className="stat__number">20</span>
                    </div>

                    <div className="profile__stats">
                        <span>Connection<br/><b>Grow Your Network</b></span>
                        <span className="stat__number">150</span>
                    </div>
            </div>

            <div className="sidebar__recent">
                <p>Recent</p>
                <p className="hash"><span>#</span> branding</p>
                <p className="hash"><span>#</span> marketing</p>
                <p className="hash"><span>#</span> webdevelopment</p>
                <p className="hash"><span>#</span> programming</p>
                <p className="hash"><span>#</span> reactjs</p>
                <p className="hash"><span>#</span> reduxtoolkit</p>
            </div>
            
        </div>
  )
}

export default Sidebar