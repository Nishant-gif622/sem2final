import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaLock } from "react-icons/fa";

function Login(){

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

function handleLogin(e){
e.preventDefault();

if(username === "Deepak" && password === "1234"){
localStorage.setItem("user",username);
navigate("/month");
}
else{
alert("Invalid Username or Password");
}
}

return(

<div className="login-container">

<div className="login-card">

<h1 className="login-title">
<FaCalendarAlt/> Event Calendar
</h1>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<div className="input-group">
<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
<FaUser className="input-icon"/>
</div>

<div className="input-group">
<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<FaLock className="input-icon"/>
</div>

<button type="submit">Login</button>

<Link to="/forgot" className="forgot">
Forgot Password?
</Link>

</form>

</div>

</div>

)

}

export default Login;