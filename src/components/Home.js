import React,{ useRef ,useEffect,useState}  from 'react';
import '../styles/Home.css'; 
import Navbar from './Navbar.js';

const App = () => {
  
 
  
 
  return (
   
    <div>
      <div >
         <Navbar/>
      </div>
        {/* {Section 1} */}
       <div className="Section1">
          <div className="SectionOneContainer">
            <div className="subtitleOne">
               <text>
                   Welcome
               </text>
            </div>
            
            <div className="subtitleTwo">
               <text>
                 We Build 
               </text>
               <text>
                Chatbot For Future
               </text>
            </div>
            <div className="subtitleThree">
               <text>
                "Discover the Future of Interaction with LLM-powered Chatbots: Impress with Human-like Conversations, Deliver Personalized Responses, and Enable Continuous Improvement."
               </text>
            </div>
          </div>

       </div>
    </div>
   
   
  
  );
};



export default App;

