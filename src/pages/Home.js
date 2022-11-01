import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";



function Home(){
   const [id, setID] = useState('');

   const [test, setTest] = useState('');

   const [userData, setUserData] = useState('');

   const routeChange = () =>{ 

   Axios.post('http://localhost:3001/diagram', {
      id: id
    }).then((response) => {

      if(response.data){
         console.log(response.data);
         setUserData({
            labels: response.data.map((data) => data.time),
            datasets: [
            {
               label: "consumption",
               data: response.data.map((data) => data.consumption),
               backgroundColor: [
                  "rgb(211,211,211)",
               ],
               borderColor: "black",
               borderWidth: 1,
            },
            ],
         });
      }


    });
   }


   if(userData){
      return( 
         <div>
         <h1>Diagram</h1>
               <input type="text" placeholder="User ID "  required onChange={(e) => {
            setID(e.target.value)
          }}/>
               <button type="submit" onClick={routeChange}>Submit</button>

               <div className="App">
                  <div style={{ width: 700 }}>
                     <BarChart chartData={userData} />
                  </div>
                  <div style={{ width: 700 }}>
                     <LineChart chartData={userData} />
                  </div>
               </div>

         </div>
      )
   }else{
      return( 
         <div>
         <h1>Diagram</h1>
               <input type="text" placeholder="User ID "  required onChange={(e) => {
            setID(e.target.value)
          }}/>
               <button type="submit" onClick={routeChange}>Submit</button>


         </div>
      )
   }
      
 
}
 export default Home;
 