
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
    return(
        <div>
            <img src={imgSrc} alt="" />
            <div>
                <h3>{content.header}</h3>
                <span>{content.content}</span>
            </div>
        </div>
        

    )
}

export default ImageAndCaption;