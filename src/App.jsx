import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './assets/styles/App.scss';
import { useState } from 'react';

const Dishes = [
  {
    image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
    name: "Tacos à l’unité",
    price: 3,
    isNew: true,
    stock: 12,
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
    name: "Enchiladas",
    price: 12,
    isNew: false,
    stock: 0,
  },
  {
    image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
    name: "Mole poblano",
    price: 15,
    isNew: false,
    stock: 5,
  }
];

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly(prev => !prev);
  };

  const filteredDishes = Dishes.filter(dish =>
    dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  return (
    <>
      <Header />
      <Container as="main" className="my-4">
        <Button
          onClick={handleShowNewOnly}
          variant="outline-primary"
          className="mb-3"
        >
          {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
        </Button>
        <Row>
          {filteredDishes.map((dish, index) => (
            <Col md={4} key={index}>
              <Dish
                image={dish.image}
                name={dish.name}
                price={dish.price}
                isNew={dish.isNew}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
