import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import  BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import  ChatIcon from '@mui/icons-material/Chat';
import  NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';



function Header() {
  const dispatch = useDispatch();

  const logoutofApp = () => {
    dispatch(logout())
    auth.signOut()
  };


  return (
    <div className='header'>
     <div className="header-left">
            <img src="/images/logo.png" alt="logo" />

            <div className="header-search">
              <SearchIcon className='icon'/>
              <input type="text" placeholder="search" />  
                       
               </div>
            
            
             </div>

             <div className="header-right">
              <HeaderOption Icon={HomeIcon} title="Home" />
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
              <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
              <HeaderOption Icon={ChatIcon} title="Messaging" />
              <HeaderOption Icon={NotificationsIcon} title="Notifications" />
              <HeaderOption title="me" avatar={true} onClick={logoutofApp} />
             </div>     
    </div>
  )
}

export default Header;
