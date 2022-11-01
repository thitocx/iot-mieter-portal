import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Home(){

let navigate = useNavigate(); 
const routeChange = () =>{ 
   let path = '/diagram/' + document.getElementsByName("userid")[0].value; 
   navigate(path);
 }


   return( 
      <>
      <h1>Diagram</h1>
      <container>
         <form required>
            <input type="text" placeholder="User ID " id="userid" name="userid" required/>
            <button type="submit" onClick={routeChange}>Submit</button>
         </form>
      </container>
      </>
   )
 
}
 export default Home;
 