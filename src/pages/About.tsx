import { useEffect, useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import { BASE_URL } from "../config/constants";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            question: ''
        });
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    return (
    <motion.div 
        className="container pt-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
    >
        {showAlert && (
        <Alert 
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
          className="position-fixed top-20 start-50 translate-middle-x mt-3"
          style={{ zIndex: 1000 }}
        >Thanks for your message! We'll get back to you soon.
        </Alert>
      )}
        <div className="hero-image" style={{height:"30vh"}}>
            <img src={BASE_URL + "/images/island_home_img.jpg"} alt="Image of island" />
            <div className="hero-text">
                <h1>About Us</h1>
            </div>
        </div>
        <p className="lead mb-5">Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most of the Tanitian economy was dominated by fishing or agriculture.</p>
        <h3>Wanna Learn More?</h3>
        <p className="lead mb-5">Contact us by filling out the following form! We'll try to get back to you within 3 business days.</p>
        
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                <img
                    src="https://placehold.co/600x400"
                    alt="Contact Us"
                    className="img-fluid rounded"
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                    }}
                />
                </Col>

                <Col md={6}>
                <h2 className="mb-4">Contact Us</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        placeholder="Enter your question"
                        rows={3}
                        required
                    />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    
    </motion.div>
    )
}

export default About;