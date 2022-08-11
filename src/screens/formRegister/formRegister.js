import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { register } from "../../services/authService";

function FormRegister() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setCredentials((prevState) => {
      return {
        ...prevState,
        [inputName]: newValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(credentials);
  };
  return (
    <div className="d-flex justify-content-center">
      <Form className="form-register" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name-user">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={credentials.name}
            onChange={(e) => onChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email-User">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={(e) => onChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password-user">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => onChangeHandler(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormRegister;
