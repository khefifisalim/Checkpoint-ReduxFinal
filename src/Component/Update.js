import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import TasksFilter from "./TasksFilter";

const Update = ({ id, name }) => {
  const dispatch = useDispatch();
  const [newname, setNewname] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const change = () => {
    if (newname.trim()) {
      dispatch({ type: "update", payload: { name: newname, id: id } });
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="task"
            value={newname}
            onChange={(e) => setNewname(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={change}>
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Update;
