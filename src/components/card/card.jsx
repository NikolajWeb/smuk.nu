import styles from "./card.module.css";

const Card = ({title, price, image }) => {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.card}>
                {image && <img src={image} alt={title} />}
                <h3>{title}</h3>
                <div className={styles.buy}>
                <p>{price},00 Kr.</p>
                <button>Køb</button>
                </div>
            </div>
        </section>
    );
};

export default Card;
