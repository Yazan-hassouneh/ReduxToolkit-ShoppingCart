import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../shared/ProductCard";
import { Remove } from "../features/CartSlice";

function Cart() {
    const cartItems = useSelector(state => state.cart.products);

    const dispatch = useDispatch()

    const removeFromCart = (item) => {   
        dispatch(Remove(item))
    }

    return (
        <Row>
            {
                cartItems.map (item => <Col key={item.id} sm={6} lg={4}><ProductCard item={item} cartAction={removeFromCart} actionName={"Remove"}></ProductCard></Col>)
            }
        </Row>    
    )
}

export default Cart