import "../styles/home.css";
import ImageAndCaption from "../components/ImageAndCaption";
import { BASE_URL } from "../config/constants";

function Home() {
    return (
        <div>
            <div className="hero-image">
                <img src={BASE_URL + "/images/island_home_img.jpg"} alt="Image of island" />
                <div className="hero-text">
                    <h1>Taniti Islands</h1>
                </div>
            </div>
            <div className="d-flex flex-column pt-5"> 
                <div className="container text-center">
                    <h1>Welcome To Taniti</h1>
                    <p className="lead mb-5">Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most of the Tanitian economy was dominated by fishing or agriculture</p>
                </div>
                
                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_entertainment_img.jpg"}
                    content={{header: "Entertainment", content: "Most people visit Taniti to enjoy the beaches, explore the rainforest, and visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year."}}
                    url={"entertainment"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_lodging_img.jpg"}
                    content={{header: "Lodging", content: "Taniti has a wide variety of lodging that range from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government."}}
                    url={"lodging"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_transportation_img.jpg"}
                    content={{header: "Transportation", content: "Almost all visitors arrive in Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years"}}
                    url={"transportation"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_grocery_img.jpg"}
                    content={{header: "Grocery", content: "Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day."}}
                    url={"grocery"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={true}
                    imgSrc={BASE_URL + "/images/island_restaurant_img.jpg"}
                    content={{header: "Restaurants", content: "Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine."}}
                    url={"restaurants"}
                ></ImageAndCaption>

                <ImageAndCaption
                    leftAlign={false}
                    imgSrc={BASE_URL + "/images/island_sightseeing_img.jpg"}
                    content={{header: "Sightseeing", content: " Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay."}}
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