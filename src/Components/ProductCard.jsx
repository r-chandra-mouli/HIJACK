import { useNavigate } from 'react-router-dom';
import './CSS/ProductCard.css'

function ProductCard(props){
    // const product = {
    //     "product-id": 101,
    //     "product-name": "MP40",
    //     "product-image-src": "https://th.bing.com/th/id/R.85e3824570018b6c2f127325c1986768?rik=yVf0emhSA64Fow&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f7%2f7c%2fMP_40_AYF_2.JPG&ehk=%2b9EZJhl2JH%2fwKciS76lAmBJpfy5QB9Kw57t6i%2fQb63U%3d&risl=&pid=ImgRaw&r=0",
    //     "price": 999
    //   };

    const navigate = useNavigate();
    const product = props.product;
    const addToCart = () => { 
        props.setItem(product)
        
    }
    
    const viewProduct = (productId)=>{
        navigate(`/product/${productId}`)
    }

    return(
        <div className="row">
            <div className="img-container" onClick={(e)=> {viewProduct(product["product-id"])}}>
                <img src= {product["product-image-src"]}  content= {product["product-name"]}></img>
            </div>
            <div className="desc-container">
                <h1>{product["product-name"]}</h1>
                <div className='price-container'><h2>${product.price}</h2></div>
                <div className='button-container'>
                    <button className='bt' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;