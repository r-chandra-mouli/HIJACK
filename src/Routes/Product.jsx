import { useParams } from "react-router-dom";
import './CSS/Product.css';
import products from "../model/product";
import TopNavBar from "../Components/TopNavBar";

function Product(props) {
    const { productId } = useParams(); 
    const product = products.find((p) => p["product-id"] === parseInt(productId)); 
    
    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <>
            <TopNavBar name= "hijack" headers={props.head} />
            <div className="product-page">
            <h1>{product["product-name"]}</h1>
            <img src={product["product-image-src"]} alt={product["product-name"]} />
            <h2>Price: ${product.price}</h2>
            <p>{product.description}</p>
            <button onClick={() => props.addToCart(product)}>Add to Cart</button>
        </div>
        </>
    );
}

export default Product;
