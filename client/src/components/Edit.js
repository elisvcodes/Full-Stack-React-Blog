import Axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
export default function Edit(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(props.post.title);
    const [body, setBody] = useState(props.post.body);

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeBody = (e) => {
        setBody(e.target.value)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = async (e) => {
        e.preventDefault();

        await Axios.put(`http://localhost:5000/api/v1/posts/${props.post.id}`, { title, body })
        handleClose(true);
        window.location.reload()
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="texty" placeholder="Title" value={title} onChange={onChangeTitle} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" rows={3} value={body} onChange={onChangeBody} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Submit
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
