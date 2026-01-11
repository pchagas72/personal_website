import "./Header.css"
import { Link } from "react-router-dom";

function Header(){
   return (
    <div className="Header_div">
        <Link to={"/"}><h1 className="h1_header">Pedro Chagas</h1></Link>
    </div>
    );
}

export default Header
