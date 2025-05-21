import { Card, Button, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Dish = ({ image, name, price, isNew }) => {
  const { addToCart } = useContext(CartContext);

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
        className="object-fit-cover"
        style={{ height: '250px' }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <Button variant="success" onClick={addToCart}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Dish;
