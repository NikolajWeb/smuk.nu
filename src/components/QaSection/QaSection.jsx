import { useEffect, useState } from "react";
import QA from "../QA/qa"; 

const QASection = () => {
    const [qas, setQAs] = useState([]);

    const fetchQAs = async () => {
        try {
            const response = await fetch(
                "https://smuknu-vomg9.ondigitalocean.app/qas/"
            );
            const data = await response.json();
            console.log(data);
            setQAs(data.data);
        } catch (error) {
            console.log("Fejl ved fetch:", error);
        }
    };

    useEffect(() => {
        fetchQAs();
    }, []);

    return (
        <section className="container">
            <div style={{ height: "1px", backgroundColor: "#FA96AA", width: "350px", margin: "0 auto", marginBlock:"20px"}}></div>

            {qas.map((qa) => (
                <QA
                    key={qa._id}
                    question={qa.question} 
                    answer={qa.answer} 
                />
            ))}
        </section>
    );
};

export default QASection;
