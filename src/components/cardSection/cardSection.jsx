import { useEffect, useState } from "react";
import Card from "../card/card";

const ProductSection = ({titleOne, titleTwo}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "https://smuknu-vomg9.ondigitalocean.app/products/"
            );
            const data = await response.json();
            console.log(data);
            setProducts(data.data);
        } catch (error) {
            console.log("Fejl ved fetch:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="container">
            <h1 style={{ marginBlock: "2rem 1rem", fontSize: "3rem" }}>
                {titleOne} <br /><span style={{ color: "#FA96AA", fontWeight: "bold", }}>{titleTwo}</span>
            </h1>  

            <div>
                {products.map((product) => (
                    <Card
                        key={product._id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
