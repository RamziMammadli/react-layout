import React from 'react'
import styles from './Card.module.css'

const Card = ({item, addtocart, addtowish}) => {
  return (
    <div className={styles.container}>
        <img src={item.thumbnail} alt="" className={styles.img} />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <button onClick={addtocart}>Add to Cart</button>
        <button onClick={addtowish}>Add to Wish</button>
    </div>
  )
}

export default Card