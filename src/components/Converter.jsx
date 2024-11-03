    import { React, useEffect, useState } from "react";
    import { AnimatePresence, motion } from "framer-motion"
    import Keyboard from "./keyborad";
    import Country from "./country";
    import  useCurrencyInfo  from "./../hooks/useCurrencyInfo";
    import useCurrencyRate from "../hooks/useCurrencyRate";

    function Converter() {



        const [screen, screenSet] = useState('main')
        const [type, setType] = useState(null)
        // from
        const [fromAmount, fromAmountSet] = useState(271)
        const [fromCurrency, fromCurrencySet] = useState('US Dollar')
        const [fromCountryCode, fromCountryCodeSet] = useState('USD')

        // to
        const [toAmount, toAmountSet] = useState(16883)
        const [toCurrency, toCurrencySet] = useState('Indian Rupee')
        const [toCountryCode, toCountryCodeSet] = useState('INR')

        //hook to fetch the country List data
        const countryList = (useCurrencyInfo())

        //hoom to fetch the country currency rate list
        const rateList = (useCurrencyRate(fromCountryCode.toLowerCase()))
        console.log(rateList)
        console.log(fromAmount, fromCountryCode)
        console.log(rateList[toCountryCode.toLowerCase()])

        useEffect(() => {
            if (rateList && rateList[toCountryCode.toLowerCase()]) {
                toAmountSet((fromAmount * rateList[toCountryCode.toLowerCase()]).toFixed(2));
            } else {
                toAmountSet(0); // Fallback value or handle error case
            }
        }, [fromAmount, fromCountryCode, toCountryCode, toCurrency]);

        // open keyboard
        function openKeyboard(through) {
            screenSet('keyboard')
            setType(through)
        }

        function openCountryList(through) {
                screenSet('country')
                setType(through)
        }

        return <div>
                <div className="relative bg-red-500 rounded-[36px] min-w-[360px]  h-[98vh]  overflow-hidden">
                {/* main screen */}
                { screen=='main' && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                >
                    {/* from currency */}
                    <div className="flex flex-col items-center justify-center gap-3 p-8 mt-5">
                        <h3 className="text-3xl font-light text-white" onClick={() => openCountryList('from')}>{ fromCurrency }</h3>
                        <h1 className="font-light text-white text-[76px]" onClick={() => openKeyboard('from')}>{ fromAmount}</h1>
                        <p className="font-medium uppercase text-[20px] text-white/40" onClick={() => openCountryList('from')}>{ fromCountryCode }</p>
                    </div>

                    {/* convert icon */}
                    <div className="relative">
        <div className="absolute inset-0 z-10 flex items-center justify-center mt-[60px]">
            <div className="inline-flex items-center justify-center p-5 bg-white rounded-full outline outline-8 outline-red-500 aspect-square size-24">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="76" viewBox="0 0 68 76" fill="none">
                    <path d="M55.25 42.6875L34 66.125M34 66.125L12.75 42.6875M34 66.125V9.875"
                        stroke="#FF5152" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </div>

                    {/* converted currency */}
                    <div className="absolute bottom-0 w-full bg-white h-[50%] rounded-[36px] -z-[0] flex justify-center items-center">

                    <div className="flex flex-col items-center justify-center gap-3 mx-auto">
                        <p className="font-medium uppercase text-[20px] text-red-500/40" onClick={() => openCountryList('to')}>{ toCountryCode }</p>
                        <h1 className="font-light text-red-500 text-[76px]">{ toAmount }</h1>
                        <h3 className="text-3xl font-light text-red-500"  onClick={() => openCountryList('to')}>{ toCurrency }</h3>
                    </div>
                    </div>
                    </motion.div>

    )}
                {/* keypad logic  */}
                <AnimatePresence>
                { screen == 'keyboard' && (
                    < Keyboard
                    amount={fromAmount}
                    setAmount={fromAmountSet}
                    onClose={() => screenSet('main')}
                    />
                )}
                </AnimatePresence>
                {/* country logic */}
                <AnimatePresence>
                {screen == 'country' && (
                    <Country
                    type={type}
                    countryList={countryList}
                    setCurrency={type == 'from' ? fromCurrencySet : toCurrencySet}
                    setCountry={type == 'from' ? fromCountryCodeSet : toCountryCodeSet }
                    onClose={() => screenSet('main')}
                    />
                )}
                </AnimatePresence>
                </div>
        </div>
    }

    export default Converter;
