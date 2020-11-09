import Axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
export default function AddPost(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeBody = (e) => {
        setBody(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            body
        }
        await Axios.post('http://localhost:5000/api/v1/posts', { data })
        props.history.push('/')
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="texty" placeholder="Title" value={title} onChange={onChangeTitle} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows={3} value={body} onChange={onChangeBody} />
                </Form.Group>
                <Button type='submit'>Add Post</Button>
            </Form>
        </div>
    )
}
