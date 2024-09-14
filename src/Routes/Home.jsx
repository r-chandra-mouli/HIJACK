import TopNavBar from "../Components/TopNavBar";
import './CSS/Home.css';
import products from '../model/product'
import ProductCard from "../Components/ProductCard";

function Home(props){
    const cards = products.map((item,i) => {
        return <ProductCard key ={i} product = {item} setItem = {props.setItems}/>
    })
    
    return(
        <>
            <TopNavBar headers={props.head} name={props.name} onLogout = {props.logout}/>
            <div className="desc">
                <h3>Discover a wide range of high-quality guns and artillery designed for collectors and enthusiasts. Explore our collection for precision, 
                durability, and performance to meet all your needs. Shop now for trusted products and expert service.</h3>
            </div>
            <div className="productList">
                {cards}
            </div>
        </>
    )
}

export default Home;