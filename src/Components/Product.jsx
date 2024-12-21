import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Product.module.css'


// Le agregue en la columna "<Col>" la clase className="mt-5" que es de bootstrap

function Product ({item}) {
    return(
        <Col className="mt-5">
            <Card style={{ width: '18rem' }} className={styles.fondo}>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title>category: {item.category}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product