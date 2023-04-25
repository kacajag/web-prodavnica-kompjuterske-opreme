 
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="topnav">
        <Link to="/">Pocetna</Link>
        <Link to="/ponuda">Ponuda</Link>

        <Link to="/kontakt">Kontakt</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
     
        

    </div>





  );
}

export default Navbar;
