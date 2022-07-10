import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import React from 'react'

const Product = ({ product }) => {
  const numRev = product.numReviews;
  return (
    <Card className='shadow p-3 mb-5 bg-white rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link className='text-decoration-none' to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='div'>
        <Rating value={product.rating} text={`${numRev} reviews`}/>
      </Card.Text>
      <Card.Text as='h4'>${product.price}</Card.Text>
    </Card>
  )
}

export default Product
