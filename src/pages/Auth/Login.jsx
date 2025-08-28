import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Card className="p-4 shadow-lg rounded-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center text-primary fw-bold mb-4">
          HairPhones Shipper
        </h2>

        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Nhập email"
              className="p-2"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              className="p-2"
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" className="fw-bold">
              Đăng nhập
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
