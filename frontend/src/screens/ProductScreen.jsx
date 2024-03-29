import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../component/Rating";
import { productDetail } from "../actions/products.action";
import Loader from "../component/Loader";
import Message from "../component/Message";

function ProductScreen() {
  const [qtd, setQtd] = useState(1);
  const dispach = useDispatch();
  const productsSelector = useSelector((state) => state.productDetail);
  const { error, loading, product } = productsSelector;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispach(productDetail(id));
  }, [dispach, id]);

  const submitHandler = () => {
    console.log("error");
    navigate(`/cart/${id}?qtd=${qtd}`);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Come back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">error</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qtd:</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qtd}
                          onChange={(e) => setQtd(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={submitHandler}
                    className="btn-block"
                    typr="button"
                    disabled={product.countInStock === 0}
                  >
                    ADD TO CARD
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ProductScreen;
