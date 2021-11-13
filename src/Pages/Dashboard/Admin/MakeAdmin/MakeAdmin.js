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

      fetch("https://stormy-coast-87051.herokuapp.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setSuccess(true);
         
        });

      e.preventDefault();
    };
    return (
      <div className="w-50 mx-auto">
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

          <Button type="submit" varient="success">
            Success
          </Button>
        </form>
        <br />
        {success && <Alert variant="success">Admin created Succesfully !</Alert>}
      </div>
    );
};

export default MakeAdmin;