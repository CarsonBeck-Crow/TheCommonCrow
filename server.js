const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const db  = new sqlite3.Database("./db.sqlite");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TIMESTAMP,
    content TEXT NOT NULL
        ) 
    `);
});

app.get(' /api/posts', (req, res) => {
    const posts = [
        { id: 1, title: 'Welcome to The Common Crow', content: 'Post 1?'},
        { id: 2, title: 'Imagine a Second Post', content: 'Post 2?'}
    ];
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});