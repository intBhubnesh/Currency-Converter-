import { React } from "react";
import coin from "./../assets/Coins.jpeg"

function Background() {
    return       <div className='relative z-0 w-full h-screen bg-red-400 shadow-md blur-sm '>
        <img src={coin} alt="" />
    </div>
}


export default Background;
