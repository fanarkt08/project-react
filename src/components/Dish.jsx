import { Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

const Dish = ({ image, name, price, isNew }) => {
  return (
    <Card className="position-relative">
      {isNew && (
        <Badge
          bg="primary"
          className="position-absolute top-0 end-0 m-2"
        >
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
      </Card.Body>
    </Card>
  );
};

export default Dish;
