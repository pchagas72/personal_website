import "./Header.css"
import mandelbrot from "../../assets/mandelbrot.png"
import { Link } from "react-router-dom";


function Header(){
    return (
    <div className="Header_div">
        <Link to={"/"}><h1>Pedro Chagas</h1></Link>
        <img src={mandelbrot}/>
    </div>
    );
}

export default Header
