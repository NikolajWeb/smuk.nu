import PageHeader from "../components/pageHeader/pageHeader";
import ContactForm from "../components/contactForm/contactForm"
import bgImg from "../assets/blomsterpige.jpg";

const Medlem = () => {
    return (
        <article>
            <PageHeader
                titleOne="Bliv medlem"
                description="Herunder har vi samlet spørgsmål og svar om sundhed. Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
                bgImg={bgImg}
                variant="member"
            />
            <ContactForm />


        </article>
    );
};

export default Medlem;