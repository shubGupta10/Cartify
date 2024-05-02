import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col, Tab} from 'react-bootstrap'
import {FaTimes, FaEdit, FaTrash} from 'react-icons/fa'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {toast} from 'react-toastify'
import {useGetProductQuery, useCreateProductMutation} from '../slices/productsApiSlice'

const ProductListScreen = () => {
    const {data: products, isLoading, error } = useGetProductQuery();

    const [createPorduct, {isLoading: loadingCreate}] = useCreateProductMutation();

    const deleteHandler = (id) => {
        console.log('delete', id);
    }


    const createProductHandler =  async () => {
        if(window.confirm("Are you sure you want to create a new Product?")) {
            try {
                await createPorduct();
                refetch();
            } catch (error) {
                toast.error(err?.data?.message || err.error);
            }
        }
    }

 
  return (
    <>
    <Row className='align-items-center'>
        <Col>
        <h1>Products</h1>
        </Col>
        <Col className='text-end'>
        <Button className='btn-sm m-3' onClick={createProductHandler}>
            <FaEdit/> Create Product
        </Button>
        </Col>
    </Row>
    {loadingCreate && <Loader/>}
    {isLoading ? <Loader/> : error ? <Message variant='danger'>
    {error}</Message> : (
        <>
        <Table striped hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((products) => {
                    <tr key={product._id}>
                        <td>{products._id}</td>
                        <td>{products.name}</td>
                        <td>{products.price}</td>
                        <td>{products.category}</td>
                        <td>{products.brand}</td>
                        <td>
                            <LinkContainer to={`/admin/products/${products._id}/edit`}> 
                            <Button variant='light' className='btn-sm mx-2'>
                                <FaEdit/>
                            </Button>
                            </LinkContainer>
                            <Button variant='danger' className='btn-sm'
                            onClick={() => deleteHandler(product._id)}
                            >
                                <FaTrash style={{color: 'white'}}/>
                            </Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
        </>
)}
    </>
  )
}

export default ProductListScreen