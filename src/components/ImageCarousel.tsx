import { Carousel } from 'react-bootstrap';
import { BASE_URL } from "../config/constants";

interface CarouselProps {
    ImageLinks: string[];
}

function ImageCarousel({ ImageLinks }: CarouselProps) {
    return (
        <Carousel>
            {ImageLinks.map((imageLink, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={BASE_URL + imageLink}
                        alt={`Slide ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;