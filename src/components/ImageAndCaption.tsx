import { Link } from "react-router-dom";
import "../styles/imageAndCaption.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ImageAndCaptionProps {
    leftAlign: boolean;
    imgSrc: string;
    content: {
        header: string;
        content: string;
    };
    url: string;
}

function ImageAndCaption(props: ImageAndCaptionProps) {
    const { leftAlign, imgSrc, content, url } = props;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50
            }}
            transition={{ duration: 0.5 }}
            className="p-3 img-caption-container"
        >
            <div className="row align-items-center">
                {leftAlign ? (
                    <>
                        <div className="col vw-50" style={{height: "50vh"}}>
                            <img className="captioned-img h-100 object-fit-cover" src={imgSrc} alt={content.header} />
                        </div>
                        <div className="col vw-50" style={{height: "50vh"}}>
                            <div className="text-start">
                            <h3>{content.header}</h3>
                            <span>{content.content}</span>
                            <br />
                            <Link to={url}>
                                <button 
                                    className="btn btn-custom" 
                                    style={{backgroundColor: "rgb(210, 233, 255)"}}
                                    >See More
                                </button>
                            </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col vw-50" style={{height: "50vh"}}>
                            <div className="text-end">
                            <h3>{content.header}</h3>
                            <span>{content.content}</span>
                            <br />
                            <Link to={url}>
                            <button
                                className="btn btn-custom"
                                style={{backgroundColor: "rgb(180, 255, 210)"}}
                                >See More
                            </button>
                            </Link>
                            </div>
                        </div>
                        <div className="col vw-50" style={{height: "50vh"}}>
                            <img className="captioned-img h-100 object-fit-cover" src={imgSrc} alt={content.header} />
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    )
    
}

export default ImageAndCaption;