import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    // console.log(year)
  return (
    <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"wheat"}}>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in qui minima, ducimus expedita impedit molestiae est culpa excepturi quasi recusandae, eaque a similique alias. Tempore pariatur et nobis eveniet?</p>
      <p>&copy;All rights reserved 2001-{year}</p>
    </div>
  )
}

export default Footer
