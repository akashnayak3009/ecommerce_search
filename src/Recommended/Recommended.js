import React from 'react'
import './Recommended.css';
import Button from '../components/Button';

const Recommended = () => {
  return (
    <>
      <div>
      <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button  value="" title="All Products" />
          <Button  value="Nike" title="Nike" />
          <Button  value="Adidas" title="Adidas" />
          <Button  value="Puma" title="Puma" />
          <Button  value="Vans" title="Vans" />
        </div>
      </div>
    </>
  )
}

export default Recommended