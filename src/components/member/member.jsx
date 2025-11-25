import styles from "./member.module.css";
import Button from "../button/button";





const Member = () => {
    return (
        <section className={styles.member}>
            <h2>Medlem?</h2>
            <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
            <Button buttonText={"Bliv medlem af kundeklubben"} />
        </section>
    );
};

export default Member;