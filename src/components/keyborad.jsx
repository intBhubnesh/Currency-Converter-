// Keyboard.js
import React from "react";
import Key from "./key";
import { motion } from "framer-motion";
import { main } from "framer-motion/client";

function Keyboard({ amount, setAmount, onClose }) {
    const keys = [
        { value: 1, type: "Number" },
        { value: 2, type: "Number" },
        { value: 3, type: "Number" },
        { value: 4, type: "Number" },
        { value: 5, type: "Number" },
        { value: 6, type: "Number" },
        { value: 7, type: "Number" },
        { value: 8, type: "Number" },
        { value: 9, type: "Number" },
        { value: ".", type: "Number" },
        { value: 0, type: "Number" },
    ];

        const handelClear = () => setAmount(0);

        // Update amount based on input
        const handleInputChange = (e) => {
            const value = e.target.value;
            if (/^\d*\.?\d*$/.test(value)) { // Accept only numbers and one decimal
                setAmount(value);
                }
        };

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute inset-0 bg-red-500"
        >
            {/* wrapper */}
            <div className="flex flex-col items-center justify-center gap-5 mt-10">
                <p className="font-medium text-[20px] text-white/40" onClick={handelClear}>tap to delete</p>
                <input className="font-light text-white bg-red-500 text-[76px] w-full text-center " onChange={handleInputChange} value={amount}  type="number" required/>
            </div>

            {/* number pad */}
            <div className="flex flex-row flex-wrap justify-between gap-4 px-10 py-8">
                {keys.map(({ value, type }, index) => (
                    // Inside Keyboard Component
                    <Key key={index} value={value} type={type} amount={amount} setAmount={setAmount} />
                ))}
                <div onClick={() => onClose()} className={`rounded-full size-20 bg-white inline-flex justify-center items-center cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 59 58" fill="none">
                        <path d="M11.5 29.4667L25.1 42.8L45.5 12.8" stroke="#FE787B" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div onClick={() => onClose()} className="flex items-center justify-center w-full mt-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37 36" fill="none">
  <path d="M29.75 12.375L18.5 23.625L7.25 12.375" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
            </div>
        </motion.div>
    );
}

export default Keyboard;
