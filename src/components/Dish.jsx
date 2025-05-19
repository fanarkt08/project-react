import { Card } from 'react-bootstrap';
import '../assets/styles/Dish.scss';

const Dish = ({ image, name, price }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;