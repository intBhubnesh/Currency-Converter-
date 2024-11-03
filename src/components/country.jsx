import { React, useId } from "react";
import { motion } from "framer-motion";

function Country({type, countryList, setCurrency, setCountry, onClose}) {

    // const toInputId = useId()

    return <>
            <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`absolute inset-0 p-10 ${type == 'from' ? 'bg-red-500' : 'bg-white'}`}
        >
            {/* back icon */}
            <div className="inline-flex items-center justify-center pl-5 -ml-8" onClick={() => onClose()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
  <path d="M17 32L2 17M2 17L17 2M2 17H38" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>

            {/* alphabel */}
            <div className="flex-col items-center justify-start h-[92%] mt-10 overflow-y-scroll ">
                {
                    countryList.map(([code, country], index) => (
                        <h1 onClick={() => {
                            
                            setCurrency(country)
                            setCountry(code)
                            onClose()
                        }} className={`block py-2 text-2xl ${type == 'from' ? 'text-white' : 'text-red-500'}   `}  key={index}>{country}</h1>
                    ))
                }
            </div>

        </motion.div>
    </>
}

export default Country;
