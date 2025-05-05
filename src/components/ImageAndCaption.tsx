import { useHref } from "react-router-dom";
import "../styles/imageAndCaption.css";

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
    return (
        <div className="p-3 img-caption-container" data-aos='fade-up'>
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
                            <button 
                                className="btn btn-custom" 
                                onClick={()=>{useHref(url)}}
                                style={{backgroundColor: "rgb(210, 233, 255)"}}
                                >See More</button>
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
                            <button
                                className="btn btn-custom"
                                onClick={()=>{useHref(url)}}
                                style={{backgroundColor: "rgb(180, 255, 210)"}}
                                >See More</button>
                            </div>
                        </div>
                        <div className="col vw-50" style={{height: "50vh"}}>
                            <img className="captioned-img h-100 object-fit-cover" src={imgSrc} alt={content.header} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
    
}

export default ImageAndCaption;