import {Row, Col} from 'react-bootstrap'
import products from "../products"
import Product from '../components/Product.jsx'

export const Homescreen = () => {
  return (
    <>
    <h1>Latest Product</h1>
    <Row>
    {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={6} xl={3} >
        <Product product={product}/>
        </Col>
    ))}
    </Row>
    </>
  )
}

export default Homescreen

