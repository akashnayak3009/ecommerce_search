import React from 'react'
import './Sidebar.css'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import Category from './Category/Category'

const Sidebar = () => {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category />
      <Price  />
      <Colors />
    </section>
  </>
  )
}

export default Sidebar