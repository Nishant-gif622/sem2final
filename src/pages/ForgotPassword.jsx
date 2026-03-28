import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){

const [email,setEmail] = useState("");
const navigate = useNavigate();

function handleSubmit(e){
e.preventDefault();

alert("Password reset link sent to: " + email);

navigate("/");
}

return(

<div className="login-container">

<div className="login-card">

<h2>Reset Password</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button type="submit">Send Reset Link</button>

</form>

</div>

</div>

)

}

export default ForgotPassword;