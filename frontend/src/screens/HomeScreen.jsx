import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../component/Product";
import Message from "../component/Message";
import Loader from "../component/Loader";
import { listPorducts } from "../actions/products.action";

function HomeScreen() {
  const dispach = useDispatch();
  const productsList = useSelector((state) => state.productlist);
  const { loading, error, products } = productsList;
  useEffect(() => {
    dispach(listPorducts());
  }, [dispach]);
  return (
    <>
      <h1>Latest products </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
