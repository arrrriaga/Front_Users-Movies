import { Col, Row } from "react-bootstrap";
import PaypalButtons from "../components/PaypalButtons";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";

const CartPage = () => {
  const { peliculas } = useContext(PeliculaContext);
  const total = peliculas.reduce(
    (acumulador, valor) => (acumulador = acumulador + valor.price),
    0
  );
  return (
    <Row>
      <Col>
        <ProductList peliculas={peliculas} total={total} />
      </Col>
      <Col>
        <PaypalButtons currency="MXN" amount={total} />
      </Col>
    </Row>
  );
};

export default CartPage;
