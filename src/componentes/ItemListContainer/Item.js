import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
 
 
 

export const Item = ({item}) => {
    
 
    return (
        <div className='tarjetasProductosHijo'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text> CATEGORY: {item.category}</Card.Text>
                    
                    <Link to = {`/detail/${item.id}`}>
                        <Button  variant="primary">Comprar</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
