import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../component/FormContainer.jsx";
import CheckoutSteps from "../component/CheckoutSteps.jsx";
import { savePaymentMethod } from "../actions/car.actions.js";
import { Link, useParams, useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.car);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    navigate("/shipping");
  }
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("PAYPAL");
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>PaymentMethod</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend"> Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Car"
              id="PayPal"
              name="paymentMethod"
              value="PAYPAL"
              checkd
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>{" "}
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
export default PaymentScreen;
