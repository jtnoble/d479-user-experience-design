import "../styles/home.css";
import ImageAndCaption from "../components/ImageAndCaption";

function Home() {
    return (
        <div>
            <img id="overview-img" src="/images/island_home_img.jpg" alt="Image of island" />
            <div className="container pt-5"> 
            <div className="text-center">
                <h1>Welcome To Taniti</h1>
                <p>Brief paragraph explaining Taniti</p>
            </div>
            
            <ImageAndCaption
                leftAlign={true}
                imgSrc={"/images/island_entertainment_img.jpg"}
                content={{header: "Entertainment", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={false}
                imgSrc={"/images/island_lodging_img.jpg"}
                content={{header: "Lodging", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={true}
                imgSrc={"/images/island_entertainment_img.jpg"}
                content={{header: "Transportation", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={false}
                imgSrc={"/images/island_lodging_img.jpg"}
                content={{header: "Grocery", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={true}
                imgSrc={"/images/island_entertainment_img.jpg"}
                content={{header: "Restaurants", content: "Test content to change later"}}
            ></ImageAndCaption>

            <ImageAndCaption
                leftAlign={false}
                imgSrc={"/images/island_lodging_img.jpg"}
                content={{header: "Sightseeing", content: "Test content to change later"}}
            ></ImageAndCaption>
            </div>  
        </div>
    )
}

export default Home;