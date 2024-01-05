import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { useContext } from 'react'
import { Appcontext } from '../../ContextApi/Context'

function Search() {
  const {searchTerm,setSearchTerm ,searchData, count  , setCount , setCartItems , cartItems} = useContext(Appcontext);

  const addToCart = (itms) => {
    setCartItems([...cartItems, {
      id: itms.id,
      title: itms.title,
      thumbnail: itms.thumbnail,
      price: itms.price,
      
    }]);
    setCount(count + 1);
  };

  return (
    <>
      <Navbar  />
     
     <h2 className='products'>Search results</h2>

      <div class="container text-center"style={{paddingRight:"10%",paddingLeft:"10%"}} >
        <div class="row ">

          {
            
            searchData && searchData.map((itms) => {
            return (
              <>

                <div key={itms.id} class="card" style={{width: "18rem"}}>
                  <img style={{height:"16.5rem"}} src={itms.thumbnail} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{itms.title}</h5>
                    <p class="card-text">{itms.description}</p>


                    <div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center",fontWeight:"bold"}}>
                      <span>&#x20B9;{itms.price} </span>
                      <span>{itms.discountPercentage} %off</span>
                    </div>

                    <button onClick={()=>addToCart(itms)}  class="btn btn-primary">Add to cart</button>

                  </div>
                </div>
              </>
            )
          }) 
          }


        </div>
      </div>
   


    </>
  )
}

export default Search
