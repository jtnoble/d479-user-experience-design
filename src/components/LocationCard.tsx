import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BASE_URL } from "../config/constants";

interface LocationCardProps {
  name: string;
  description: string;
  imgSrc: string;
}

function LocationCard(props: LocationCardProps) {
  const { name, description, imgSrc } = props;
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className="col-md-6 col-lg-4 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="card h-100 shadow-sm">
        <img src={BASE_URL + imgSrc} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default LocationCard;
