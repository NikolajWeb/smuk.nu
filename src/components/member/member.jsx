import { NavLink } from "react-router";
import styles from "./member.module.css";
import Button from "../button/button";

const Member = () => {
    return (
        <section className={styles.member}>
            <h2>Medlem?</h2>
            <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
            <NavLink to="/medlem">
                <Button buttonText="Bliv medlem af kundeklubben" />
            </NavLink>
        </section>
    );
};

export default Member;
