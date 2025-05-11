import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Lodging() {

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
            <h1>Lodging</h1>
            <p>Taniti has a wide variety of lodging that range from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government</p>
            <ImageCarousel ImageLinks={
                [
                    "/images/island_lodging_img.jpg",
                    "/images/island_lodging_img.jpg"
                ]}>
            </ImageCarousel>
        </motion.div>
    )
}


export default Lodging;