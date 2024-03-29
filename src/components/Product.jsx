/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
// import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch()

  const [products, getProducts] = useState([])
  // const {data:products} = useSelector(state => state.products)

  useEffect(() => {
    //dispatch an action for fetchProducts
    // dispatch(getProducts())
    //api
    fetch('http://fakestoreapi.com/products')
    .then(data => data.json())
    .then(results => getProducts(results))
  }, [])


  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom: '10px'}}>
      <Card key={product.id} className="h-100 ">
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px'}}/>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Prix: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white'}}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button></Card.Footer>
      </Card>
    </div>
  ))
  return (

      <>
        <h1>Product Dashboard</h1>
          <div className="row">
            {cards}
          </div>
      </>
  )
}

export default Product