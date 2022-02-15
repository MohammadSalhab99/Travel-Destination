import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        {/* <nav>
           <Link to="/city">City</Link>
        </nav> */}
        
    </div>
  );
}
export default Header;
