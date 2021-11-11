import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';


const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const handleOnBlur = (e) => {
      setEmail(e.target.value);
    };
    const handleAdminSubmit = (e) => {
      const user = { email };
      fetch("http://localhost:5000/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .the((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            console.log(data);
            setSuccess(true);
          }
        });

      e.preventDefault();
    };
    return (
      <div>
        <h1>Make a admin</h1>
        <form onSubmit={handleAdminSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="email"
              placeholder="Email"
              name="password"
              onBlur={handleOnBlur}
            />
          </Form.Group>

          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </form>
        {success && <Alert variant="success">Admin created Succesfully !</Alert>}
      </div>
    );
};

export default MakeAdmin;