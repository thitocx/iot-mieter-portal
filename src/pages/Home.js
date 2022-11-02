import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';



function Home(){
   const [id, setID] = useState('');

   const [test, setTest] = useState('');

   //let navigate = useNavigate(); 


   const routeChange = () =>{ 
   //let path = '/diagram'; 
   //navigate(path);

   Axios.post('http://localhost:3000/diagram', {
      id: id
    }).then((response) => {
      setTest(response.data.message);
    });
   }

   /*(window.location.href.split('?')[1]){
      if(window.location.href.split('?')[1].split('=')[1]){
         const id = window.location.href.split('?')[1].split('=')[1];
         console.log(id);
      }
   }else{*/
      return( 
         <div>
         <h1>Diagram</h1>
            <form required>
               <input type="text" placeholder="User ID " id="userid"  required onChange={(e) => {
            setID(e.target.value)
          }}/>
               <button type="submit" onClick={routeChange}>Submit</button>
            </form>
            <h1>{test}</h1>
         </div>
      )
   //}
 
}
 export default Home;
 