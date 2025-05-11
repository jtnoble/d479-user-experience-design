import "../styles/home.css";
import ImageAndCaption from "../components/ImageAndCaption";
import { BASE_URL } from "../config/constants";

function Home() {
    return (
        <div>
            <img id="overview-img" src={BASE_URL + "/images/island_home_img.jpg"} alt="Image of island" />
            <div className="d-flex flex-column pt-5"> 
                <div className="container text-center">
                    <h1>Welcome To Taniti</h1>
                    <p>Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most of the Tanitian economy was dominated by fishing or agriculture</p>
                </div>
                
                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_entertainment_img.jpg"}
                    content={{header: "Entertainment", content: "Test content to change later"}}
                    url={"entertainment"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_lodging_img.jpg"}
                    content={{header: "Lodging", content: "Test content to change later"}}
                    url={"lodging"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_transportation_img.jpg"}
                    content={{header: "Transportation", content: "Test content to change later"}}
                    url={"transportation"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_grocery_img.jpg"}
                    content={{header: "Grocery", content: "Test content to change later"}}
                    url={"grocery"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_restaurant_img.jpg"}
                    content={{header: "Restaurants", content: "Test content to change later"}}
                    url={"restaurants"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_sightseeing_img.jpg"}
                    content={{header: "Sightseeing", content: "Test content to change later"}}
                    url={"sightseeing"}
                ></ImageAndCaption>
            </div>  
            <div className="p-5 text-center" data-aos='fade-up'>
                <h3>Interested?</h3>
                <span>Contact us via email at <a href="mailto:taniti-interest@taniti.com">taniti-interest@taniti.com</a></span>
            </div>
        </div>
    )
}

export default Home;