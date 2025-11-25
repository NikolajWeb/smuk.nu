import PageHeader from "../components/pageHeader/pageHeader";
import ReviewSection from "../components/reviewSection/reviewSection";
import ProductSection from "../components/cardSection/cardSection";
import Member from "../components/member/member"
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
            <ProductSection />
            <ReviewSection />
            <Member/>


        </article>
    );
};

export default Forside;