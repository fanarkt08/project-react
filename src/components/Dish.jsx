import { Card, Button, Badge } from 'react-bootstrap';

const Dish = ({ image, name, price, isNew }) => {
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
        <Button variant="success" onClick={() => alert(`Le plat ${name} est maintenant dans votre panier`)}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Dish;
