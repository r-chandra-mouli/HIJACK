import TopNavBar from "../Components/TopNavBar";
import './CSS/Cart.css';

function Cart(props) {
    const cart = props.cart;

    const totalPrice = Object.values(cart).reduce((total, item) => {
        return total + item.price * item.count;
    }, 0);

    const cartItems = Object.values(cart).map((item, index) => (
        <div key={index} className="cart-item">
            <img src={item["product-image-src"]} alt={item["product-name"]} className="cart-item-image" />
            <div className="cart-item-details">
                <h2>{item["product-name"]}</h2>
                <p>Price: ${item.price}</p>
                <input 
                    type="number" 
                    value={item.count} 
                    onChange={(e) => props.updateItemCount(item, parseInt(e.target.value))} 
                    min={1}
                />
                <button className="remove-item-button" onClick={() => props.removeItem(item["product-id"])}>Delete</button>
            </div>
        </div>
    ));
    

    return (
        <>
            <TopNavBar headers={props.head} name={props.name} onLogout = {props.logout}/>
            <div className="cart-container">
                <h1>Your Cart</h1>
                {cartItems.length > 0 ? (
                    <>
                        <div className="cart-items">{cartItems}</div>
                        <div className="cart-total">
                            <h2>Total Price: ${totalPrice}</h2>
                            <div className='button-container'>
                                <button className='bt'>Check Out</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <h2>Your cart is empty.</h2>
                )}
            </div>
        </>
    );
}

export default Cart;
