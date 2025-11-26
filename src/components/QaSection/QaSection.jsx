import { useEffect, useState } from "react";
import QA from "../QA/qa"; // Sørg for, at QA-komponenten er korrekt lavet

const QASection = () => {
    // State til QAs
    const [qas, setQAs] = useState([]);

    // Fetch funktion
    const fetchQAs = async () => {
        try {
            const response = await fetch(
                "https://smuknu-vomg9.ondigitalocean.app/qas/"
            );
            const data = await response.json();
            console.log(data); // Til debug
            setQAs(data.data);
        } catch (error) {
            console.log("Fejl ved fetch:", error);
        }
    };

    // useEffect kører kun én gang ved mount
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
