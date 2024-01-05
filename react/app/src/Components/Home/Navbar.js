import { Appcontext } from '../../ContextApi/Context';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Navbar() {  
  const {count,setCount,cartItems,setCartItems ,searchTerm,setSearchTerm,products, searchData,setSearchData} = useContext(Appcontext);
  // console.log(cartItems);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

// form handle
  const navigate = useNavigate();
  const submit = ()=>{
    navigate('/protected/search');
  }



const handleSearch =(e)=>{
const input = e.target.value;
// console.log(input)
setSearchTerm(input);


 // applying filter on products by search 
 const  searh_data = products &&  products.filter((items)=> items.title && items.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase())) 

 // console.log(searh_data)
 setSearchData(searh_data  || [] )  ;
}
  

// remove items from cart
const removeItem = (index)=>{
  cartItems.splice(index, 1);
  setCount(count-1)
  
}
  
  return (
    <>
      <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">

          <div className='name' style={{fontFamily:"cursive" , fontWeight:"600"}}>ShopKART</div>

          <form onSubmit={submit} class="d-flex" role="search" className='form'>
            <input onChange={handleSearch} value={searchTerm}  class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  required/>
          
          </form>



          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <button type="button" class="btn btn-primary position-relative">
              <ion-icon name="cart-outline"></ion-icon>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
              </span>
            </button>
          </button>


          <div class="offcanvas offcanvas-end"  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div class="offcanvas-header" >

              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{ count!=0 ? <h4>Your orders</h4> : <h4>Shop Now</h4>} </h5>

              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              
            </div>

            <div class="offcanvas-body">
                 {
                  count == 0 ? <ion-icon style={{fontSize:"15rem",display:"flex",flexDirection:"column",alignItems:"center"}}  name="trash-bin-outline"></ion-icon> 

                  :
                  
                   cartItems && cartItems.map((orders,index)=>{
                      return(
                        <>
                    <div key={index} style={{display:"flex", width:"10%",height:"10%" , width:"100% !", marginTop:"10%"}}>
                    <img src={orders.thumbnail} alt='/'/>

                    <div>
                      <h6>&nbsp;&nbsp;&nbsp;{orders.title}</h6>

                      <h6>&nbsp;&nbsp;&nbsp;&#x20B9;{orders.price}
                      &nbsp;&nbsp;&nbsp;<ion-icon name="bag-remove-outline" onClick={removeItem}></ion-icon>
                      </h6>
                      
                    </div>

                  </div>
                 
                        </>
                      )

                    })
                  }



<button   style={{margin:"40%",width:"30%" , height:"10%"}}  type="button" class="btn btn-primary">{count !=0 ? <p>Pay {totalPrice}</p> :"Shop Now"  }</button>

                
                 
            
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
