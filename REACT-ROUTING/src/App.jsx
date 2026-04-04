import { Link, Outlet } from "react-router-dom";
function App()
{
  return (<div>
    <h1>React Routing</h1>
    <Link to="home">Home</Link>
    <Link to="dashboard">Dashboard</Link>
    <Link to="about">About</Link>
    <Link to="contactUs">Contact Us</Link>
    <Outlet></Outlet>
  </div>)
}

export default App;