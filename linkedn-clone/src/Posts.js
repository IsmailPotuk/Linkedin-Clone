import React from 'react'
import './Posts.css'
import picimg from './profilepic.jpg'
import send from './send.png'
import share from './share.png'
import comment from './comment.png'
import like from './likebutton.png'



function Posts() {
  return (
    <div className='post'>
        <div className='post__header'>
            <img src={picimg} width="50" height="50"/>
            <div className='post__info'>
               <h2>İsmail Potuk</h2>
               <p>Description</p>
            </div>    
        </div>  
        <div className='post__body'>
            <p> I'm trying to learn about this REACT and REDUX, there is noone looking at this shit.There are only simple level youtube videos.I have to learn this shit on myself. </p>
        </div>
        <div className='post__buttons'>
            <div className='post__buttons'>
                <img src={like}  width="25" height="25"/>
                <h3>Like</h3>
            </div>
            <div className='post__buttons'>
                <img src={comment} width="25" height="25" />
                <h3>Comment</h3>
            </div>
            <div className='post__buttons'> 
                <img src={share} width="25" height="25" />
                <h3>Share</h3>
            </div>
            <div className='post__buttons'>
                <img src={send} width="25" height="25" />
                <h3>Send</h3>
            </div>
        </div>
    </div>

  )
}

export default Posts