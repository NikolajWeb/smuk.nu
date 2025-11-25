import { useEffect, useState } from "react";
import Review from "../review/review";

const ReviewSection = () => {
    // State til reviews
    const [reviews, setReviews] = useState([]);

    // Fetch funktion
    const fetchReviews = async () => {
        try {
            const response = await fetch(
                "https://smuknu-vomg9.ondigitalocean.app/reviews/"
            );
            const data = await response.json();
            console.log(data); // Til debug
            setReviews(data.data);
        } catch (error) {
            console.log("Fejl ved fetch:", error);
        }
    };

    // useEffect kører kun én gang ved mount
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <section className="container">
            <h1 style={{marginBlock: "2rem 1rem", fontSize: "3rem" }}><span style={{ color: "#FA96AA", fontWeight: "bold" }}>SKØNHEDER</span><br />UDTALER </h1>  

            {reviews.map((review) => (
                <Review
                    key={review._id}
                    name={review.name}
                    content={review.content}
                    image={review.image}
                />
            ))}
        </section>
    );
};

export default ReviewSection;
