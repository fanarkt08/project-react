import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import { Container, Row, Col } from 'react-bootstrap';
import './assets/styles/App.scss';

function App() {
  return (
    <>
      <Header />
        <Container as="main" className="my-4">
          <Row>
            <Col md={4}>
              <Dish
                image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                name="Tacos à l’unité"
                price={3}
                isNew={true}
              />
            </Col>
            <Col md={4}>
              <Dish
                image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                name="Enchiladas"
                price={12}
                isNew={false}
              />
            </Col>
            <Col md={4}>
              <Dish
                image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                name="Mole poblano"
                price={15}
                isNew={false}
              />
            </Col>
          </Row>
        </Container>
      <Footer />
    </>
  );
}

export default App;
