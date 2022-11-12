import React, { useEffect, useState} from 'react'
import "./Feed.css"
import Posts from'./Posts.js';
import pen from './pen.png';
import photos from './photos.png'
import article from './article.png'
import event from './event.png'
import video from './vide.png'



function Feed() {
      return (

    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <img src={pen} width="25" height="25" />
                <form>
                    <input type="text"/>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className='feed__inputOption'>
                <div className='feed__inputOptions'>
                   <img src={photos} width="25" height="25" />
                   <h3>Photo</h3>    
                </div>
                <div className='feed__inputOptions'>
                    <img src={video} width="25" height="25" />
                    <h3>Video</h3> 
                </div>
                <div className='feed__inputOptions'>
                    <img src={event} width="25" height="25" />
                    <h3>Event</h3> 
                </div>
                <div className='feed__inputOptions'>
                    <img src={article} width="25" height="25" />
                    <h3>Article</h3> 
                </div>
            </div>
        </div>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
    </div>
  )
}

export default Feed