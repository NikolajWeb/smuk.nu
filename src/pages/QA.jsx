import PageHeader from "../components/pageHeader/pageHeader";
import QaSection from "../components/QaSection/QaSection"
import Member from "../components/member/member"
import bgImg from "../assets/blomsterpige.jpg";

const QA = () => {
    return (
        <article>
            <PageHeader
                titleOne="Spørg om sunhed"
                description="Herunder har vi samlet spørgsmål og svar om sundhed. Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
                bgImg={bgImg}
                variant="pink"
            />
            <QaSection />
            <Member />


        </article>
    );
};

export default QA;