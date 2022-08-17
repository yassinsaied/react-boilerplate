import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { login } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   logged && navigate("/counter", { replace: true });
  // }, []); // eslint-disable-line

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch.auth.asyncLogin(credentials);
      navigate("/counter", { replace: true });
    } catch (err) {
      dispatch.auth.loginFail();
    }
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
        <Form.Control.Feedback type="invalid">
          {auth.message}
        </Form.Control.Feedback>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
