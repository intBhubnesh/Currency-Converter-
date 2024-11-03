import { React } from "react";
import Description from "./description";
import Converter from "./Converter";

function Forground() {
    return <>
    <div className="z-10 w-full h-screen flex absolute left-0 top-0 justify-center p-5   items-center gap-[54px]">
        < Description />
        < Converter/>
    </div>
    </>
}

export default Forground;
