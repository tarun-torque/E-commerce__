import Home from "./Components/Home/Home";
import Login from "./Components/Login_sign/Login";
import Search from "./Components/SearchPage/Search";
import Protected from "./Components/Protected/Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error";
import './App.css'


import { Appcontext } from "./ContextApi/Context";
import { useContext } from "react";

function App() {
  const { token } = useContext(Appcontext);
  console.log("app",token)
  

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />

       <Route path="protected" element={<Protected />} >
           <Route path="home" element={<Home />} />
           <Route path="search" element={<Search/>}/>
       </Route>

       <Route path="*" element={<Error />} />

    </Routes>
    </BrowserRouter>


    
   
    </>
  );
}


export default App;
