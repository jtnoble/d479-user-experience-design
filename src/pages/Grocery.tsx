import "../styles/home.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import LocationCard from "../components/LocationCard";

const locationData = [
  {
    name: "Taniti Supermarket - #1",
    description: "One of Taniti's finest supermarkets.",
    imgSrc: "/images/island_grocery_img.jpg",
  },
  {
    name: "Taniti Supermarket - #2",
    description: "One of Taniti's finest supermarkets.",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "Taniti Grocery - #1",
    description: "Smaller local grocery store.",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "Taniti Grocery - #2",
    description: "Smaller local grocery store.",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "Taniti Convenience",
    description: "Basic convenience needs.",
    imgSrc: "/images/400x240.jpg",
  },
];

function Grocery() {
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
      <h1 className="mb-4">Grocery</h1>
      <p className="lead mb-5">Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.</p>
      
      <div className="row">
        {locationData.map((location, index) => (
          <LocationCard 
            key={index}
            name={location.name}
            description={location.description}
            imgSrc={location.imgSrc}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Grocery;
