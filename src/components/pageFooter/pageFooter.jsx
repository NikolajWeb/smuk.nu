import styles from "./pageFooter.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const PageFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FaPinterest />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>

            <p>mail@smuk.nu</p>
            <p>+45 123 345 33</p>
        </footer>


    );
};

export default PageFooter;