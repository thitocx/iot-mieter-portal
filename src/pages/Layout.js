import { Outlet, Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Diagram</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <hr></hr>
      </nav>

      

      <Outlet />
    </>
  )
};

export default Layout;
