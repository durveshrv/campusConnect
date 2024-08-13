import axios from '../../axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './view.css';
import { Link } from 'react-router-dom';

function View() {
  const [product, setProduct] = useState('')
  const id=useParams()
  const imgURL='https://campusconnect-1.onrender.com/upload_img/'
  console.log(id.id);
  useEffect(() => {
    axios.get('/viewProduct/'+id.id).then((response)=>{
      console.log(response);
      setProduct(response.data.product)
    })
  }, [])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
         src={ product.image? imgURL+product.image.filename :''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price} </p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <p>{product.description}</p>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{product.username}</p>
          <p>{product.phoneno}</p>
          <p>{product.email}</p>
      </div>
      <div style={{ marginTop:'30px' }}><Link to={'/buy_sell'}><button className='btn btn-dark'> Back</button></Link></div>
        </div>
    </div>
  )
}

export default View
