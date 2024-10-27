import './CSS/TopNavBar.css'
import { useNavigate } from 'react-router-dom';
import Context from "../main"
import { useContext } from 'react';

function TopNavBar(props){
    const {loggedin, setLoggedIn} = useContext(Context);
    const navigate = useNavigate()
    const handleClick = (item) => {
        
        if (item === "LOGOUT") {
          props.onLogout();
        }
        else if(item === "CART"){
            (loggedin ? navigate("/cart") : navigate("/login"))
            
        }else if(item === "HOME"){
            navigate("/")
        }
        else if(item === "LOGIN"){
            navigate("/login")
        }
      }
    const items = props.headers.map((item,i)=><div key={i} className="header-items" onClick={()=>{handleClick(item)}}>{item}</div>)
    ;
    return(
        <div className="TopNavBar">
            <img src='/logo.jpg'></img>
            <h1 className="heading">{props.name}</h1>
            <div className='header'>
                {items}
            </div>
        </div>
    )
}

export default TopNavBar;