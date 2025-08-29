import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const { response: responseLogin, data: dataLogin, fetchApi: fetchLogin } = useApi(authService.login);
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchLogin(form)
  }

  useEffect(() => {
    if (dataLogin?.token) {
      sessionStorage.setItem('token', dataLogin.token)
      navigate('/')
    }
  }, [dataLogin])
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
              name="email"
              placeholder="Nhập email"
              className="p-2"
              value={form?.email}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              className="p-2"
              value={form?.password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} className="fw-bold">
              Đăng nhập
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
