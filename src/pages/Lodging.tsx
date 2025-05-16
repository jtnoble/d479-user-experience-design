import "../styles/home.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import LocationCard from "../components/LocationCard";

const locationData = [
  {
    name: "Mariott",
    description: "4-star resort",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "Hotel - 1",
    description: "Small family-owned hotel",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "Hotel - 2",
    description: "Small family-owned hotel",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "B&B - 1",
    description: "Small family-owned Bed & Breakfast",
    imgSrc: "/images/400x240.jpg",
  },
  {
    name: "B&B - 2",
    description: "Small family-owned Bed & Breakfast",
    imgSrc: "/images/400x240.jpg",
  },
];

function Lodging() {
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
      <h1 className="mb-4">Lodging</h1>
      <p className="lead mb-5">Taniti has a wide variety of lodging that range from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.</p>
      
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

export default Lodging;
