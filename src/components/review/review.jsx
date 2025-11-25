import styles from "./review.module.css";

const Review = ({ name, content, image }) => {
    return (
        <section className={styles.review}>
            {image && <img src={image} alt={name} style={{ maxWidth: "150px" }} />}
            <p>{content}</p>
            <h3>{name}</h3>
            <p>Tilfeds Kunde</p>
            <div className={styles.pinkBar}></div>
        </section>
    );
};

export default Review;
