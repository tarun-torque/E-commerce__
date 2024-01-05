import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Appcontext = createContext();

const AppProvider = ({children}) =>{

    const[products , setProducts] = useState();
    const[count , setCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const[searchTerm,setSearchTerm] = useState();
    const [token ,setToken] = useState(localStorage.getItem('token') || '');
    const [customerName,setCustomerName] = useState(localStorage.getItem('customerName') || '')
    const [searchData , setSearchData] = useState() ;
    
    const callProduct = async()=>{
      const res = await axios.get('https://dummyjson.com/products');
      // console.log(res.data)
      setProducts(res.data.products)
    }
    useEffect(()=>{
      callProduct()
    },[])
    


return(
    <Appcontext.Provider value={{products , count , setCount,cartItems,setCartItems,searchTerm,setSearchTerm ,token ,setToken ,customerName,setCustomerName , searchData , setSearchData}}>{children}</Appcontext.Provider>
)

}

export { Appcontext  , AppProvider } ;