import PageHeader from "../components/pageHeader/pageHeader";
import ProductSection from "../components/cardSection/cardSection";
import Member from "../components/member/member"
import bgImg from "../assets/blomsterpige.jpg";

const Products = () => {
    return (
        <article>
            <PageHeader
                titleOne="Skønne produkter"
                description="Herunder finder du alle vores produkter"
                bgImg={bgImg}
                variant="dark"
            />
            <ProductSection titleOne="ALT ER" titleTwo="SKØNHED" />
            <Member />


        </article>
    );
};

export default Products;