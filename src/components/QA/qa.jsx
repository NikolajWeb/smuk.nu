import { useState } from "react";
import styles from "./qa.module.css";
import { FaQuestion } from "react-icons/fa";

const QA = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(prev => !prev); // toggler visningen
    };

    return (
        <section className={styles.qa}>

            <div className={styles.question} onClick={handleClick}>
                <FaQuestion size={35}  color={showAnswer ? "#FA96AA" : "lightgrey"} /* ændrer farve ved klik */ />
                <h2>{question}</h2>
            </div>

            {showAnswer && (
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            )}
            
            <div className={styles.pinkBar}></div>
        </section>
    );
};

export default QA;
