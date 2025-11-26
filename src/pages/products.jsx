import PageHeader from "../components/pageHeader/pageHeader";
import Member from "../components/member/member"
import bgImg from "../assets/blomsterpige.jpg";

const Products = () => {
    return (
        <article>
            <PageHeader
                titleOne="Skønne produkter"
                description="Herunder finder du alle vores produkter"
                bgImg={bgImg}
            />
            <Member />


        </article>
    );
};

export default Products;