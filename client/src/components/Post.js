import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Edit from './Edit';

export default function Post(props) {
    const [post, setPost] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/v1/posts/${props.match.params.id}`)
            .then(res => setPost(res.data));
    }, [props.match.params.id])
    return (
        <>
            {post.map(post => {
                return (
                    <div key={post.id}>
                        <h1> {post.title}</h1>
                        <p> {post.body}</p>
                        <Edit post={post} />
                        <Button onClick={() => {
                            Axios.delete(`http://localhost:5000/api/v1/posts/${post.id}`)
                            setTimeout(() => {
                                props.history.push('/')
                            }, 50)
                        }}>Delete </Button>

                    </div>

                )
            })}

        </>
    )
}
