import "./Header.css"
import mandelbrot from "../../assets/mandelbrot.png"
import old_man from "../../assets/old_man.png"
import bear from "../../assets/bear.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function changeCurrentPic(index: number, picturesLen: number){
    if (index != picturesLen-1){
        return index+1 
    }
    return 0
}

function Header(){
    const pictures = [mandelbrot, old_man, bear]
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
