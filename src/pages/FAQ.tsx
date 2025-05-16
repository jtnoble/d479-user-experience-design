import { useEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";

function FAQ() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
    <motion.div 
        className="container pt-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
    >
        <h1>Frequently Asked Questions</h1>
        <p className="lead mb-5">The following are frequently asked questions regarding your stay at Taniti</p>
        <ul className="lead mb-5">
            <li>Power outlets are 120 volts (the same as in the United States).</li>
            <li>Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.</li>
            <li>The drinking age on Taniti is 18 and the drinking age is not strictly enforced.</li>
            <li>Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.</li>
            <li>There is one hospital and several clinics. The hospital has many multilingual employees.</li>
            <li>Violent crime is very rare in Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.</li>
            <li>Taniti enjoys many national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.</li>
            <li>Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards</li>
        </ul>
    </motion.div>
    )
}

export default FAQ;