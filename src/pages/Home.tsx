import "../styles/home.css";
import ImageAndCaption from "../components/ImageAndCaption";
import { BASE_URL } from "../config/constants";

function Home() {
    return (
        <div>
            <img id="overview-img" src={BASE_URL + "/images/island_home_img.jpg"} alt="Image of island" />
            <div className="d-flex flex-column pt-5"> 
                <div className="text-center">
                    <h1>Welcome To Taniti</h1>
                    <p>Brief paragraph explaining Taniti</p>
                </div>
                
                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_entertainment_img.jpg"}
                    content={{header: "Entertainment", content: "Test content to change later"}}
                    url={BASE_URL + "entertainment"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_lodging_img.jpg"}
                    content={{header: "Lodging", content: "Test content to change later"}}
                    url={BASE_URL + "lodging"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_transportation_img.jpg"}
                    content={{header: "Transportation", content: "Test content to change later"}}
                    url={BASE_URL + "transportation"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_grocery_img.jpg"}
                    content={{header: "Grocery", content: "Test content to change later"}}
                    url={BASE_URL + "grocery"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_restaurant_img.jpg"}
                    content={{header: "Restaurants", content: "Test content to change later"}}
                    url={BASE_URL + "restaurants"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_sightseeing_img.jpg"}
                    content={{header: "Sightseeing", content: "Test content to change later"}}
                    url={BASE_URL + "sightseeing"}
                ></ImageAndCaption>
            </div>  
            <div className="p-5 text-center" data-aos='fade-up'>
                <h3>Interested?</h3>
                <span>Something about providing the upmost care for the island and selling the trip.</span>
            </div>
        </div>
    )
}

export default Home;