import React from 'react'
import './Sidebar.css';
import profi from './profilepic.jpg'

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItems'>
            <span className='sidebar__hash'>#</span> 
            <p>{topic}</p>

        </div>
    );


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src={profi} />
            <h2>İsmail Potuk</h2>
            <h4>potuk70@gmail.com</h4>
        </div>
        <div className='sidebar___stats'>
            <div className='sidebar___stat'> 
                <p>Who viewed you?</p>
                <p className='sidebar___statNumber'> 1,250</p>

            </div>
            <div className='sidebar___stat'> 
                <p>Views on post</p>
                <p className='sidebar___statNumber'>1,250</p>

            </div>
                     
         </div>
         <div className='sidebar___bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("code")}
                {recentItem("design")}
                {recentItem("developer")}


            </div>
    </div>
  )
}

export default Sidebar