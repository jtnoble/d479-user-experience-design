import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Grocery() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <motion.div 
            className="container pt-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Grocery</h1>
            <p>Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.</p>
            <ImageCarousel ImageLinks={
                [
                    "/images/island_grocery_img.jpg",
                    "/images/island_grocery_img.jpg"
                ]}>
            </ImageCarousel>
        </motion.div>
    )
}


export default Grocery;