import "../styles/home.css";
import ImageAndCaption from "../components/Content_ImageAndCaption";

function Home() {
    return (
        <div>
            <img id="overview-img" src="/images/island_home_img.jpg" alt="Image of island" />
            <h1>What is Taniti?</h1>
            <p>Brief paragraph explaining Taniti</p>
            <ImageAndCaption
                leftAlign={true}
                imgSrc={"/images/island_entertainment_img.jpg"}
                content={{header: "Entertainment", content: "Test content to change later"}}
            ></ImageAndCaption>
        </div>
    )
}

export default Home;