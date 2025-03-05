import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import ProductCard from "../shared/ProductCard"


function Products() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState({
        error : false,
        message : ""
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const result = axios.get('https://fakestoreapi.com/products')
        .then(response => response.data) // Extract the data
        .catch(error => {
            setError({
                error : true,
                message : error.message
            })
            setLoading(false)
        });
        
        result.then(data => {
            setProducts(data)
            setLoading(false)
        });
    }, [])

    return (
        <Row>
            {
                loading
                ? <h1>Loading ...</h1>
                : error.error
                ? <h3>{error.message}</h3>
                : products.map (item => <Col key={item.id} sm={6} lg={4}><ProductCard item={item}></ProductCard></Col>)
            }
        </Row>    
    )
}

export default Products