import "../styles/home.css";
import ImageCarousel from "../components/ImageCarousel";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function Entertainment() {
    const carouselItems = [
        { image: "/images/1280x720.jpg", heading: "Local History Museum" },
        { image: "/images/1280x720.jpg", heading: "Chartered Fishing Tours" },
        { image: "/images/1280x720.jpg", heading: "Zip-lining" },
        { image: "/images/1280x720.jpg", heading: "The Microbrewery" },
        { image: "/images/1280x720.jpg", heading: "Dancing" },
        { image: "/images/1280x720.jpg", heading: "Movies" },
        { image: "/images/1280x720.jpg", heading: "Helicopter Rides" },
        { image: "/images/1280x720.jpg", heading: "Arcade" },
        { image: "/images/1280x720.jpg", heading: "Art Galleries" },
        { image: "/images/1280x720.jpg", heading: "Bowling" },
        { image: "/images/1280x720.jpg", heading: "Nine-hole Golf (TBD)" },
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
            <h1>Entertainment</h1>
            <p className="lead mb-5"> Most people visit Taniti to enjoy the beaches, explore the rainforest, and visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay.</p>
            <ImageCarousel items={carouselItems}/>
        </motion.div>
    )
}


export default Entertainment;