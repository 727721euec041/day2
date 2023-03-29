import React from 'react'
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQSPK5JLSsUS6Qy0n1l9ClWgKjG6Ui-PzEw&usqp=CAU" alt="" />
        <h2>PULSE SENSOR</h2>
        <h2>Price : 340</h2>
      
     </div>
     <div className='product1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnotPhZ92lXGgYs2wKigCTYBZpd5TFU1JAmg&usqp=CAU" alt="" />
        <h2>GENERAL KIT</h2>
        <h2>Price : 2450</h2>
     </div>
     <div className='product2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCu5kjdoFc8fF-WBkYoyquZJY8P9DJjWBuw&usqp=CAU" alt="" />
        <h2>MULTIMETER</h2>
        <h2>Price : 210</h2>
     </div>
     

    </div>
    </section>
  )
}
