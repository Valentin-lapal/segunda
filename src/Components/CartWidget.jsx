import Badge from 'react-bootstrap/Badge'

function CartWidget () {
    return(
        <div>
            <Badge bg="secondary">4
             <i className="bi bi-cart-fill"></i>
            </Badge>
        </div>
        
    );
}

export default CartWidget