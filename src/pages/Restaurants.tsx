import "../styles/home.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import LocationCard from "../components/LocationCard";

const locationData = [
  {
    name: "Ocean Breeze Grill",
    description: "Fresh local fish and island-style rice dishes.",
    imgSrc: "/images/island_restaurant_img.jpg",
  },
  {
    name: "Taniti Tacos",
    description: "Casual spot serving American-Mexican fusion.",
    imgSrc: "/images/restaurant2.jpg",
  },
  {
    name: "Sunset Catch",
    description: "Local seafood specialties with ocean views.",
    imgSrc: "/images/restaurant3.jpg",
  },
  {
    name: "Island Diner",
    description: "Classic American-style breakfasts and burgers.",
    imgSrc: "/images/restaurant4.jpg",
  },
  {
    name: "PanAsia Delight",
    description: "Pan-Asian cuisine including Thai, Japanese, and Chinese dishes.",
    imgSrc: "/images/restaurant5.jpg",
  },
  {
    name: "Lagoon Lounge",
    description: "Tropical drinks and fresh grilled fish plates.",
    imgSrc: "/images/restaurant6.jpg",
  },
  {
    name: "Grill & Chill",
    description: "All-American BBQ and comfort food.",
    imgSrc: "/images/restaurant7.jpg",
  },
  {
    name: "The Rice Bowl",
    description: "Traditional island fare centered around rice and vegetables.",
    imgSrc: "/images/restaurant8.jpg",
  },
  {
    name: "Bay Bistro",
    description: "Elegant seafood and local ingredients.",
    imgSrc: "/images/restaurant9.jpg",
  },
  {
    name: "Wok This Way",
    description: "Quick-service Asian noodle and stir fry dishes.",
    imgSrc: "/images/restaurant10.jpg",
  },
];

function Restaurants() {
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
      <h1 className="mb-4">Restaurants</h1>
      <p className="lead mb-5">Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.</p>
      
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

export default Restaurants;
