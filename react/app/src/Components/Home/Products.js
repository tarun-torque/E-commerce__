import React, { useEffect } from 'react'
import Alert from '@mui/material/Alert';
import { Appcontext } from '../../ContextApi/Context';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {

  const { products, count, setCount, cartItems, setCartItems,customerName, searchData, setSearchData } = useContext(Appcontext);


  const [show, setShow] = useState();

  useEffect(() => {
    setShow(products && products)
  }, [products]);

  // console.log("show",show)

  // sorting products based on their price
  const LowToHigh = products && [...products].sort((a, b) => a.price - b.price);
  // console.log("LowToHigh",LowToHigh);

  const HighToLow = products && [...products].sort((a, b) => b.price - a.price);
  // console.log("HighToLow",HighToLow);

  const filterProducts = (e) => {
    const selectedFilter = e.target.value;
    // console.log(selectedFilter);
    if (selectedFilter == 1) {
      setShow(LowToHigh)
      console.log("low to high")
    }

    else if (selectedFilter == 2) {
      setShow(HighToLow);
    }

  }
  // sorting end here 




  const addToCart = (itms) => {
    setCartItems([...cartItems, {
      id: itms.id,
      title: itms.title,
      thumbnail: itms.thumbnail,
      price: itms.price,

    }]);
    setCount(count + 1);
  };


  //log out 
  const navigate = useNavigate()
  const Logout =()=>{
    localStorage.removeItem('token')
    navigate('/')
  }


  return (
    <>
      <div class="container text-center products">
        <div class="row align-items-start">
          <div class="col" style={{fontWeight:"700" , fontStyle:"cursive"}}>
            Hello {customerName}
          </div>

          <div class="col">
            <button onClick={Logout} class="btn btn-primary">Log out </button></div>
        </div>
      </div>




      <h2> Shop Now for best deals</h2>



      <select value="0" onChange={filterProducts} class="form-select" aria-label="Default select example" style={{ width: "45%" }}>
        <option value="0" selected>Filter Product</option>
        <option value="1">Price Low to High</option>
        <option value="2">Price High to Low</option>
      </select>





      <div class="container text-center" style={{ paddingRight: "10%", paddingLeft: "10%" }} >
        <div class="row ">

          {

            show && show.map((itms) => {
              return (
                <>

                  <div key={itms.id} class="card" style={{ width: "18rem" }}>
                    <img style={{ height: "16.5rem" }} src={itms.thumbnail} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{itms.title}</h5>
                      <p class="card-text">{itms.description}</p>


                      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", fontWeight: "bold" }}>
                        <span>&#x20B9;{itms.price} </span>
                        <span>{itms.discountPercentage} %off</span>
                      </div>

                      <button onClick={() => addToCart(itms)} class="btn btn-primary">Add to cart</button>

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

export default Products
