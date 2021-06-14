import express from 'express';

const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('This is the slash');
});
app.listen(port, () => {
    console.log("Serveur à l'écoute sur le port : ", port)
})