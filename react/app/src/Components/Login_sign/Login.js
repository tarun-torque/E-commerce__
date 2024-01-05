import React, { useState } from 'react'
import { Appcontext } from '../../ContextApi/Context';
import { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const { setToken, token, setCustomerName } = useContext(Appcontext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();





  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password
      })
      // console.log(res.data);
      localStorage.setItem('token', res.data.token);
      // alert('Now you can shop');
      setToken(res.data.token);
      setCustomerName(res.data.firstName)
      localStorage.setItem('customerName', res.data.firstName);

    }
    catch (err) {
      // console.log(err);
      alert("Invalid credentials")
    }
  }








  return (
    <div className='login' style={{ overflow: "hidden", margin: "5%" }}>
      <h3>{!token &&  "Login here for Shopping" }  </h3>

     {  !localStorage.getItem('token') &&    <form class="row g-3">

        <div class="col-md-12">
          <label for="username" class="form-label">username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="username" />
        </div>


        <div class="col-md-12">
          <label for="pswd" class="form-label">Password</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="pswd" />
        </div>

       
         <div class="col-12"><button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button></div>

        

      </form>

}


{
  localStorage.getItem('token') ? <div class="col-12"><Link to="protected/home"> <button class="btn btn-primary">Start Shopping</button> </Link></div> : null
}






    </div>
  )
}

export default Login
