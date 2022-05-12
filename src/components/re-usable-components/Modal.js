import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ModalBody = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const emailRef = useRef("")

  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );


  // Handle Password Reset
  const handlePasswordReset = () => {
    const email = emailRef.current.value
    sendPasswordResetEmail(email)
    setShow(false);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              give the email address to reset your password!
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handlePasswordReset} variant="primary">reset password</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBody;
