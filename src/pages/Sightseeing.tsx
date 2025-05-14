import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Sightseeing() {
    const carouselItems = [
        { image: "/images/island_sightseeing_img.jpg", heading: "Taniti City" },
        { image: "/images/island_sightseeing_img.jpg", heading: "Volcanos" },
        { image: "/images/island_sightseeing_img.jpg", heading: "Rainforest" },
    ]

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
            <h1>Sightseeing</h1>
            <p className="lead mb-5">Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay.</p>
            <ImageCarousel items={carouselItems}/>
        </motion.div>
    )
}


export default Sightseeing;