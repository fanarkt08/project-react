import { Card, Button, Badge } from 'react-bootstrap';
import '../assets/styles/Dish.scss';
import useCart from '../hooks/useCart';

const Dish = ({ image, name, price, isNew }) => {
  const { addToCart, removeFromCart } = useCart()

  return (
    <Card className="position-relative">
      {isNew && (
        <Badge bg="primary" className="position-absolute top-0 end-0 m-2">
          Nouveau
        </Badge>
      )}
      <Card.Img
        variant="top"
        src={image}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <div className="d-flex flex-column gap-2 mt-3">
          <Button
            variant="success"
            onClick={addToCart}
          >
            Ajouter au panier
          </Button>
          <Button
            variant="outline-danger"
            onClick={removeFromCart}
          >
            Retirer du panier
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Dish;
