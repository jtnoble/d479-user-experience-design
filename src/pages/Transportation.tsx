import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Transportation() {

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
            <h1>Transportation</h1>
            <p> Almost all visitors arrive in Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years</p>
            <h3>Ground Transportation</h3>
            <ul>
                <li>Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. </li>
                <li>Private buses serve the rest of the island.</li>
                <li>Taxis are available in Taniti City.</li>
                <li>Rental cars can be rented from a local rental agency near the airport.</li>
                <li>Bikes and helmets are available to rent from several vendors (helmets are required by law). </li>
            </ul>
            <p>Taniti City is flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.</p>
            <ImageCarousel ImageLinks={
                [
                    "/images/island_transportation_img.jpg",
                    "/images/island_transportation_img.jpg"
                ]}>
            </ImageCarousel>
        </motion.div>
    )
}


export default Transportation;