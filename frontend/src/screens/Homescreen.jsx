import {Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Product from '../components/Product.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'

const Homescreen = () => {
  const {pageNumber} = useParams();
  const {data, isLoading, error} = useGetProductsQuery({pageNumber}); 
  return (
    <>
    {isLoading ? (
      <Loader/>
    ): error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : (<>
      <h1>Latest Product</h1>
      <Row>
      {data.products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={3} >
          <Product product={product}/>
          </Col>
      ))}
      </Row>
    </>) }
    </>
  )
}

export default Homescreen

