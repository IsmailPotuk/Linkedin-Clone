import './Rightsidebox.css'
import React from 'react'
import one from './react.png'
import arrow from './right arrow.png'

function Rightsidebox() {
  return (
    <div>
        <div className='rightbox'>
        
        
            <div>
                <div className='rightboxlist'>
                   <img src= {one} width="50" height="50" />
                   <p>REACT Development Group <br /> Software · Technology</p>
                   
                </div>
                <div className='rightboxlist'>
                   <img src= {one} width="50" height="50" />
                   <p>REACT Development Group <br /> Software · Technology</p>
                </div>
                <div className='rightboxlist'>
                   <img src= {one} width="50" height="50" />
                   <p>REACT Development Group <br /> Software · Technology</p>
                   
                </div>

                <div className='off'>
                    <p>View all recommendations </p>
                    <img src={arrow}/>
                </div>
            </div>    
        
        </div>    

    </div>
  )
}

export default Rightsidebox