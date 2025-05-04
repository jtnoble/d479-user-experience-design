import "../styles/home.css";
import ImageAndCaption from "../components/ImageAndCaption";

const BASE_URL = import.meta.env.BASE_URL;

function Home() {
    return (
        <div>
            <img id="overview-img" src={BASE_URL + "/images/island_home_img.jpg"} alt="Image of island" />
            <div className="container pt-5"> 
            <div className="text-center">
                <h1>Welcome To Taniti</h1>
                <p>Brief paragraph explaining Taniti</p>
            </div>
            
            <ImageAndCaption
                leftAlign={true}
                imgSrc={BASE_URL + "/images/island_entertainment_img.jpg"}
                content={{header: "Entertainment", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={false}
                imgSrc={BASE_URL + "/images/island_lodging_img.jpg"}
                content={{header: "Lodging", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={true}
                imgSrc={BASE_URL + "/images/island_entertainment_img.jpg"}
                content={{header: "Transportation", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={false}
                imgSrc={BASE_URL + "/images/island_lodging_img.jpg"}
                content={{header: "Grocery", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={true}
                imgSrc={BASE_URL + "/images/island_entertainment_img.jpg"}
                content={{header: "Restaurants", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={false}
                imgSrc={BASE_URL + "/images/island_lodging_img.jpg"}
                content={{header: "Sightseeing", content: "Test content to change later"}}
            ></ImageAndCaption>
            </div>  
        </div>
    )
}

export default Home;