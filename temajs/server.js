const express = require('express');
const app = express();

app.use(express.static('vlad'))
const port = 3000;


app.get('/', function(req,res) {
    res.sendFile(__dirname + "/vlad/index.html");
});


app.get('/form', function(req,res) {
    res.sendFile(__dirname + "/vlad/Form.html");
});

app.get('/pregame', function(req,res) {
    res.sendFile(__dirname + "/vlad/pregame.html");
});

app.get('/tetris', function(req,res) {
    res.sendFile(__dirname + "/vlad/Tetris copy.html");
});

app.get('/about_tetris', function(req,res) {
    res.sendFile(__dirname + "/vlad/about_tetris.html");
});

app.get('/about_gameplay', function(req,res) {
    res.sendFile(__dirname + "/vlad/about_gameplay.html");
});

app.get('/about_history', function(req,res) {
    res.sendFile(__dirname + "/vlad/about_history.html");
});

app.get('/about_cognitive', function(req,res) {
    res.sendFile(__dirname + "/vlad/about_cognitive.html");
});

app.get('*', function(req,res) {
    console.log(__dirname)
    res.status(404).sendFile(__dirname + '/vlad/error.html')
});


app.listen(port, () => console.log('Example app listening at http://localhost:$(port)'))

