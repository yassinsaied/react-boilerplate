import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { login } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [credentials, setCredentials] = useState({
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
    dispatch.auth.UPDATE("test", "okkk");
    dispatch.auth.asyncLogin(credentials);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form className="form-signin" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address {auth.token}</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={(e) => onChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
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

export default LoginForm;
