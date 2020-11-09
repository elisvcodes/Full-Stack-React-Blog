import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
export default function HomePage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/api/v1/posts')
            .then(res => setPosts(res.data))
    }, [])

    return (
        <>
            {posts.map(post => {
                return (
                    <Card key={post.id}>
                        <Card.Body>
                            <Card.Title as={Link} to={`/post/${post.id}`}>{post.title}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}
