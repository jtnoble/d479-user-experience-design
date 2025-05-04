import "../styles/imageAndCaption.css";

interface ImageAndCaptionProps {
    leftAlign: boolean;
    imgSrc: string;
    content: {
        header: string;
        content: string;
    };
}

function ImageAndCaption(props: ImageAndCaptionProps) {
    const { leftAlign, imgSrc, content } = props;
    return (
        <div className="container pt-3 pb-3 img-caption-container">
            <div className="row align-items-center">
                {leftAlign ? (
                    <>
                        <div className="col-md-6">
                            <img className="captioned-img" src={imgSrc} alt={content.header} />
                        </div>
                        <div className="col-md-6">
                            <h3>{content.header}</h3>
                            <span>{content.content}</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-md-6">
                            <h3>{content.header}</h3>
                            <span>{content.content}</span>
                        </div>
                        <div className="col-md-6">
                            <img className="captioned-img" src={imgSrc} alt={content.header} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
    
}

export default ImageAndCaption;