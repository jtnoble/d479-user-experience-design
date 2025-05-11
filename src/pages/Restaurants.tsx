import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Restaurants() {

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
            <h1>Restaurants</h1>
            <p>Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.</p>
            <ImageCarousel ImageLinks={
                [
                    "/images/island_restaurant_img.jpg",
                    "/images/island_restaurant_img.jpg"
                ]}>
            </ImageCarousel>
        </motion.div>
    )
}


export default Restaurants;