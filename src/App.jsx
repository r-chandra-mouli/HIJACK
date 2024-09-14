import { useEffect, useState } from "react";
import TopNavBar from "./Components/TopNavBar"
import ProductCard from "./Components/ProductCard";
import Home from "./Routes/Home";
import product from './model/product'
import Cart from './Routes/Cart'
import Login from "./Routes/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Product from "./Routes/Product";

function App() {
  const [login, setLogIn] = useState(false);
  const [userDetails, setUserDetails] = useState({}); 
  const head = ["HOME", "CART"];
  const [cart, setCart] = useState({});
  // const navigate = useNavigate();

  if (setLogIn && userDetails.username) {
    head.push(userDetails.username);
    head.push("LOGOUT");
  } else {
    head.push("LOGIN");
  }

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productId = product["product-id"];
      const updatedCart = prevCart[productId]
        ? {
            ...prevCart,
            [productId]: {
              ...prevCart[productId],
              count: prevCart[productId].count + 1,
            },
          }
        : {
            ...prevCart,
            [productId]: {
              ...product,
              count: 1,
            },
          };
          // navigate("/cart")
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  const updateCount = (product, count) => {
    setCart((prevCart) => {
      const productId = product["product-id"];
  
      if (prevCart[productId]) {
        return {
          ...prevCart,
          [productId]: {
            ...prevCart[productId], 
            count: Math.max(1, count) 
          }
        };
      }
      return prevCart; 
    });
  };
  

   

  const removeCart = (productId) =>{
    setCart(
      (prevCart) => {
        const {[productId]: removedItem, ...rest} = prevCart;
        return rest;
      }
    )
  }

  const handleLogout = () => {
    setLogIn(false);
    setUserDetails({});
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    setCart({});
  };

  const loggedIn = (credentials) => {
    setLogIn(true);
    setUserDetails(credentials);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userDetails", JSON.stringify(credentials));
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserDetails = localStorage.getItem("userDetails");
    
    if (isLoggedIn && storedUserDetails) {
      setLogIn(true);
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  // useEffect(() => {
  //   console.log(cart), [cart]
  // });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []); 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home name="hijack" head={head} setItems={addToCart} logout = {handleLogout}/>} />
          <Route path="/cart" element={<Cart name="hijack" head={head} cart={cart} removeItem={removeCart} logout = {handleLogout} updateItemCount = {updateCount}/>} />
          <Route path="/login" element={<Login onLogin={loggedIn}/>}></Route>
          <Route path="/product/:productId" element={<Product addToCart = {addToCart} name="hijack" head={head} logout = {handleLogout}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
