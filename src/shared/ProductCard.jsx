import { Button, Card } from 'react-bootstrap';
function ProductCard({item, cartAction, actionName}) {

    return (
        <Card style={{ width: '18rem', marginBottom: '16px'}}>
            <Card.Img variant="top" src={item.image} style={{objectFit : "cover", height : "300px"}}/>
            <Card.Body>
                <Card.Title>{item.title.length > 15 ? item.title.substring(0, 15)+ "..." : item.title}</Card.Title>
                <Card.Text>{item.description.length > 140 ? item.description.substring(0, 140) + "..." : item.description}</Card.Text>
                <Button variant="primary" onClick={() => cartAction(item)}>{actionName}</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard