import { Outlet, Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
    
    <br></br>

      

      <Outlet />
    </>
  )
};

export default Layout;


/*

  <nav>
        <ul>
        <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/diagram">Diagram</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <hr></hr>
      </nav>


*/
