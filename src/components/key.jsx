import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Key({ value, type, amount, setAmount }) {
    const [isSplashing, setIsSplashing] = useState(false);

    const handleClick = () => {
        let total = String(amount);
        total = total === '0' ? value : total + value;
        setAmount(total);

        // Trigger the splash animation
        setIsSplashing(true);

        // Reset splash effect after animation
        setTimeout(() => setIsSplashing(false), 400);
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex items-center justify-center overflow-hidden rounded-full size-20 bg-white/30"
        >
            {/* Splash Animation */}
            <AnimatePresence>
                {isSplashing && (
                    <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ opacity: 0.3, scale: 0 }}
                    animate={{ opacity: 0, scale: 2 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.42, 0, 0.58, 1] 
                    }}
                />
                )}
            </AnimatePresence>

            {/* Key Value */}
            <h1 className="text-[32px] text-white">{value}</h1>
        </div>
    );
}

export default Key;
