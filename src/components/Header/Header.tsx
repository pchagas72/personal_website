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
    const [clicks, setClicks] = useState(0)
    if (clicks < 3){
        var mandelbrot_text = "";
    } else{
        var mandelbrot_text = "Curious about the images?";
    }
    return (
    <div className="Header_div">
        <Link to={"/"}><h1 className="h1_header">Pedro Chagas</h1></Link>
        <img onClick={() => { 
                setCurrent_pic(changeCurrentPic(current_pic, pictures.length));
                setClicks(clicks+1);
            }
            }
                src={pictures[current_pic]}/>
        <p className="mandelbrot_text"><a href="https://pt.wikipedia.org/wiki/Conjunto_de_Mandelbrot#:~:text=Mandelbrot%2C%20um%20matem%C3%A1tico%20do%20IBM,em%20escalas%20cada%20vez%20menores.">{mandelbrot_text}</a></p>
    </div>
    );
}

export default Header
