import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.logo}>Logo HEADER</h1>
        <div className={styles.navs}>
            <Link to={'/cart'}>gotoBasket</Link>
            <Link to={'/wishlist'}>gotoWishlist</Link>
            
        </div>
    </div>
  )
}

export default Header