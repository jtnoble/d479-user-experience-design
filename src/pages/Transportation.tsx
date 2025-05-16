import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Transportation() {
    const carouselItems = [
        { image: "/images/1280x720.jpg", heading: "Public Buses: 5am to 11pm, every day" },
        { image: "/images/1280x720.jpg", heading: "Private Buses: By Request" },
        { image: "/images/1280x720.jpg", heading: "Taxis" },
        { image: "/images/1280x720.jpg", heading: "Rental Cars" },
        { image: "/images/1280x720.jpg", heading: "Bikes & Helmets" },
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
            <h1>Transportation</h1>
            <p className="lead mb-5"> Almost all visitors arrive in Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years</p>
            <h3>Ground Transportation</h3>
            <ul className="lead mb-5">
                <li>Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. </li>
                <li>Private buses serve the rest of the island.</li>
                <li>Taxis are available in Taniti City.</li>
                <li>Rental cars can be rented from a local rental agency near the airport.</li>
                <li>Bikes and helmets are available to rent from several vendors (helmets are required by law). </li>
            </ul>
            <p className="lead mb-5">Taniti City is flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.</p>
            <ImageCarousel items={carouselItems}/>
        </motion.div>
    )
}


export default Transportation;