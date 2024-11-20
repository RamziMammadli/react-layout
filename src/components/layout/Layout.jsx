import React from 'react'
import Header from '../header/Header'
import styles from './Layout.module.css'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout