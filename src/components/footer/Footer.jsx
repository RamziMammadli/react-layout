import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.logo}>Logo Footer</h1>
        <div className={styles.navs}>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
        </div>
    </div>
  )
}

export default Footer