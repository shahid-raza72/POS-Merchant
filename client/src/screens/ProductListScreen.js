import React,{useState,useEffect} from 'react'
import { Row, Col, ListGroup, Button,Table } from 'react-bootstrap'
import axios from 'axios'



const ProductListScreen= () => { 

  const[products, setProducts] =useState([]);
  const getproducts=()=>{
    axios.get('/api/products')
    .then((response)=>{
    console.log("read it",response.data.products)
    setProducts(response.data.products);
    });
  };

  useEffect(() => getproducts(), [])
  const [Items, setItems] = useState([]);
  const itemsPrice = Items.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;



  const onAdd = (product) => {
    const exist = Items.find((x) => x._id === product._id);
    if (exist) {
      setItems(
        Items.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setItems([...Items, { ...product, qty: 1 }]);
    }
  };


  const deleteHandler = (product) => {
    const exist = Items.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setItems(Items.filter((x) => x._id !== product._id));
    } else {
      setItems(
        Items.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Row>
      <Col md={4}>
        <h1>Product List</h1>
        {products.length === 0 ? (
          <h3>
            No Product
          </h3>
        ) : (
          <ListGroup variant='flush'>
            {products.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={3}>
                    {item.name}
                  </Col>
                  <Col md={2}>Rs {item.price}</Col>
                  
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={()=>onAdd(item)}
                    >
                      +Add
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={6}>
      <h1>Display Data</h1>
      <div>{Items.length === 0 &&<div> Add products to billing Table</div>}</div>
      {<Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Items.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>Rs {product.price}</td>
                  <td>  <div>
                      <button onClick={() => deleteHandler(product)} className="remove">
                        -
                      </button>{' '}
                      <button onClick={() => onAdd(product)} className="add">
                        +
                      </button>
                    </div>
                  </td>
                  <td>{product.price} X {product.qty} = {product.price*product.qty}</td>
                  <td>
               
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>}
          {Items.length !== 0 && (
          <>
            <hr></hr>
            
            <div className="row">
              <div className="col-4">Items Price</div>
              <div className="col-1">{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-4">Tax Price</div>
              <div className="col-1">{taxPrice.toFixed(2)}</div>
            </div>
            

            <div className="row">
              <div className="col-4">
                <strong>Total Price</strong>
              </div>
              <div className="col-4 text-right">
                <strong>Rs {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('click to Print')}>
                paid
              </button>
            </div>
            
         
          </>
        )}
      </Col>
    </Row>
  )
}

export default ProductListScreen