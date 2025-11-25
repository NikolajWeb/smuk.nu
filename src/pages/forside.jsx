import PageHeader from "../components/pageHeader/pageHeader";
import bgImg from "../assets/blomsterpige.jpg";

const Forside = () => {
    return (
        <article>
            <PageHeader
                titleOne="Skønhed for alle"
                description="Herunder har vi samlet spørgsmål og svar om sundhed. "
                button
                buttonText="Se udvalgte produkter"
                bgImg={bgImg}
            />
        </article>
    );
};

export default Forside;