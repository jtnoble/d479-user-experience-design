import { Carousel } from 'react-bootstrap';
import { BASE_URL } from "../config/constants";

interface CarouselItemData {
    image: string;
    heading: string;
}

interface CarouselProps {
    items: CarouselItemData[];
}

function ImageCarousel({ items }: CarouselProps) {
    return (
        <Carousel>
            {items.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={BASE_URL + item.image}
                        alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption>
                        <h3>{item.heading}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
