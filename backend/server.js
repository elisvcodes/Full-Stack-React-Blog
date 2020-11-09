const express = require('express');
const pool = require('./db');
const cors = require('cors')
const app = express();

// Middleware
// Allows us to acces req.body
app.use(express.json());
// Allows our front end to communicate with our backend
app.use(cors());
// GET all the posts
app.get('/api/v1/posts', async (req, res) => {
    try {
        const posts = await pool.query(
            'SELECT * FROM posts'
        )
        res.json(posts.rows);
    } catch (error) {
        console.log(error.message)
    }
})

// GET a single post that matches our id
app.get('/api/v1/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query(
            'SELECT * FROM posts WHERE id=$1', [id]
        )
        res.json(post.rows);
    } catch (error) {
        console.log(error.message)
    }
})

// DELETE a single post that matches our id
app.delete('/api/v1/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(
            'DELETE FROM posts WHERE id=$1', [id]
        )
        res.send({ status: 'success', message: 'post was deleted' });
    } catch (error) {
        console.log(error.message)
    }
})

// POST information the DB we get from the forms from the front end
app.post('/api/v1/posts', async (req, res) => {
    try {
        const { title, body } = req.body.data;
        await pool.query(
            'INSERT INTO posts (title, body) VALUES($1,$2)', [title, body]
        )
        res.send({ status: 'success', message: 'post was added' });
    } catch (error) {
        console.log(error.message)
    }
})


// UPDATE a post that matches the id
app.put('/api/v1/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;
        await pool.query(
            'UPDATE posts SET title=$1, body=$2 WHERE id=$3', [title, body, id]
        )
        res.send({ status: 'success', message: 'post was updated' });
    } catch (error) {
        console.log(error.message)
    }
})

// launches the server
app.listen(5000);
