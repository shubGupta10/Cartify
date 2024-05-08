import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col, Tab} from 'react-bootstrap'
import {FaEdit, FaTrash} from 'react-icons/fa'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {toast} from 'react-toastify'
import Paginate from '../components/Paginate'
import {useParams} from 'react-router-dom';
import {useGetProductsQuery, useCreateProductMutation, useDeleteProductMutation} from "../slices/productsApiSlice"

const ProductListScreen = () => {
    const {pageNumber} = useParams();
    const {data, isLoading, error, refetch } = useGetProductsQuery({
        pageNumber,
    });

    const [createPorduct, {isLoading: loadingCreate}] = useCreateProductMutation();

    const [deleteProduct, {isLoading: loadingDelete} ] = useDeleteProductMutation();

    const deleteHandler = async (id) => {
        if(window.confirm("Are u sure?")){
            try {
                await deleteProduct(id);
                refetch();
            } catch (err) {
              toast.error(err?.data?.message || err.error);  
            }
        }
    };


    const createProductHandler =  async () => {
        if(window.confirm("Are you sure you want to create a new Product?")) {
            try {
                await createPorduct();
                refetch();
            } catch (err) {
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
    {loadingDelete && <Loader/>}
    
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
                {data.products.map((products) => {
                    <tr key={products._id}>
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
                            onClick={() => deleteHandler(products._id)}
                            >
                                <FaTrash style={{color: 'white'}}/>
                            </Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
        <Paginate pages={data.pages} page={data.page} isAdmin={true}/>
        </>
)}
    </>
  )
}

export default ProductListScreen