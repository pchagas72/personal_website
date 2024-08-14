import "./Header.css"
import mandelbrot from "../../assets/mandelbrot.png"
import mandelbrot2 from "../../assets/old_man.png"
import mandelbrot3 from "../../assets/bear.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function changeCurrentPic(index: number, picturesLen: number){
    if (index != picturesLen-1){
        return index+1 
    }
    return 0
}

function Header(){
    const pictures = [mandelbrot,mandelbrot2, mandelbrot3]
    const [current_pic, setCurrent_pic] = useState(0)
    return (
    <div className="Header_div">
        <Link to={"/"}><h1>Pedro Chagas</h1></Link>
        <img onClick={() =>
                setCurrent_pic(changeCurrentPic(current_pic, pictures.length))}
                src={pictures[current_pic]}/>
    </div>
    );
}

export default Header
