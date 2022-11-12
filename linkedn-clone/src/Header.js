import React from 'react';
import './Header.css';
import logo from './linkedn-logo.png'
import searchicon from './211818_search_icon.png'
import home from './home.png'
import network from './network.png'
import jobs from './jobs.png'
import message from './message.png'
import noti from './notifications.png'


function Header() {
  return (
    <div className="header">
        <div className="header__left"> 

            <img src={logo} alt="linledn.logo" />

            <div className="header__search">
              
              <img src={searchicon} />
              <input type="text"/>
              


            </div>
        
        </div>
        <div className="header__right">
          <div className="header__right">
            <img src={home}/>
            <h3>HOME</h3>
          </div>
          <div className="header__right">
            <img src={network}/>
            <h3>NETWORK</h3>
          </div>
          <div className='header__right'> 
            <img src={jobs} width="25" height="25"/>
            <h3>JOBS</h3>
          </div>
          <div className='header__right'>
            <img src={message} width="25" height="25" />
            <h3>MESSAGE</h3>

          </div>
          <div className='header__right'>
            <img src={noti} width="30" height="30"/>
            <h3>NOTIFICATIONS</h3>

          </div>
          <div>
            <h3>LOG IN/SING UP</h3>
          </div>
          
          
          


        </div>
    
    
    
    
    
    </div>
           

        
  );
}

export default Header