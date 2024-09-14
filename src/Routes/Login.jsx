import TopNavBar from "../Components/TopNavBar";
import { useState } from "react";
import './CSS/Login.css'
import { useNavigate } from "react-router-dom";
import Context from "../main"
import { useContext } from "react";

function Login(props){
  const {loggedin, setLoggedIn} = useContext(Context);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoggedIn(true)
        props.onLogin(credentials);
        navigate("/")
      };

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <p>PLEASE ENTER YOUR CREDENTIALS</p>
      <input
        type="text"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        placeholder="Username"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit" onClick={handleSubmit}>LOGIN</button>
    </form>
        </div>
    )
}

export default Login;