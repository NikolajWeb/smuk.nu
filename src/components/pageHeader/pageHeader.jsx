import styles from "./pageHeader.module.css";
import Button from "../button/button";
import { NavLink } from "react-router";


const PageHeader = ({ titleOne, description, button, buttonText, bgImg, variant }) => {
    return (
        <header className={`${styles.header} ${variant ? styles[variant] : ""}`}>
            <img src={bgImg} />
            <div className={styles.content}>
                <h1>{titleOne}</h1>
                <p>{description}</p>
                <NavLink to="/products">
                {button && <Button buttonText={buttonText} />}
                </NavLink>
            </div>
        </header>
    );
};


export default PageHeader;
