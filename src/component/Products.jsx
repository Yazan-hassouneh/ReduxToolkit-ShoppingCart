import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import ProductCard from "../shared/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { Add } from "../features/CartSlice"
import { getProducts } from "../features/ProductSlice"


function Products() {

    const dispatch = useDispatch()
    const {data, status} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const addToCart = (item) => {   
        dispatch(Add(item))
    }
    console.log(status);
    
    return (
        <Row>
            {
                status === 'loading ' || status === 'idle'
                ? <h1>Loading ...</h1>
                : status === 'failed'
                ? <h3>Failed To Load Data</h3>
                : data.map (item => <Col key={item.id} sm={6} lg={4}><ProductCard item={item} cartAction={addToCart} actionName={"Add"}></ProductCard></Col>)
            }
        </Row>    
    )
}

export default Products