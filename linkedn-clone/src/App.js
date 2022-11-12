
import React from 'react';
import './App.css';
import Rightsidebox from './Rightsidebox'
import Header from "./Header";
import Sidebar from './Sidebar';
import Feed from './Feed';



function App() {
  
  return (
    <div ClassName="App">
      <Header/>
                 
      
      <div className='app__body'>
        <Sidebar/>
        <Feed />
        <Rightsidebox />
          
      </div>
      
    </div>
  );
}

export default App;
