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

       {/* Section 2  */}

       <div className="Section2">
         <div className="subsectionOne">
         
         </div>

         <div className="subsectionTwo">
               <div className="subsectionTwoLeft">
                   
                  <div className="stlsub">
                     <div className="stlTextbox1">
                        <text>About Us</text>
                     </div>

                     <div className="stlTextbox2">
                        <h1>Experts for Developing ChatBots</h1>
                     </div>

                     <div className="stlTextbox3">
                       <div className="stlt3Left">
                         
                       </div>
                       <div className="stlt3Right">
                         <p>
                         With over 10 chatbots developed utilizing various technologies, our expertise spans across industries such as healthcare, corporate, education, and more, addressing diverse needs with tailored solutions.
                         </p>  
                       </div>
                     </div>
                  </div>
                  

               </div>
               <div className="subsectionTwoRight">
                 <img src={require('../Assets/chatbot.png')} style={{width:'100%',height:'100%'}}/>

               </div>
         </div>

         <div className="subsectionThree">
            
         </div>



       </div>

       {/* Section 3 */}

       <div className="Section2">
            <div className="subsectionOnefor3">
            
            </div>

            <div className="subsectionTwo">
               <div className="subsectionTwoRight">
                 <img src={require('../Assets/llm.jpeg')} style={{width:'100%',height:'100%'}}/>

               </div>

               <div className="subsectionTwoLeftfor3">
                   
                  <div className="stlsubfor3">
                     <div className="stlTextbox1for3">
                        <text>What We Do</text>
                     </div>

                     <div className="stlTextbox2for3">
                        <h1>Craft Pixel perfect chatbot</h1>
                     </div>

                     <div className="stlTextbox3for3">
                       
                       <div className="stlt3Rightfor3">
                         <p>
                           We specialize in crafting cutting-edge chatbots utilizing advanced large language models, including state-of-the-art Retrieval-Augmented Generation (RAG) technology, to deliver unparalleled conversational experiences.
                         </p>  
                       </div>

                       
                     </div>
                  </div>
                  

               </div>
               
         </div>


       </div>
    </div>
   
   
  
  );
};



export default App;

