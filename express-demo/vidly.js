// Import necessary packages
const Joi = require ('@hapi/joi');
const express = require ('express');
const app = express();

// Aids in the parsing of JSON for testing.
app.use(express.json());

// Test sample.
const genres = [
    { id: 1, name: "action" },
    { id: 2, name: "comedy" },
    { id: 3, name: "horror" },
    { id: 4, name: "romance" }
];

// Get All aka Get
app.get('/api/genres', (req, res) => {
    res.send(genres);
});

// Get One
app.get('/api/genres/:id', (req, res) => {
    // Confirm genre
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('404: Genre Not Found');
    res.send(genres(req.id)); 
});

// Create aka Post
app.post('/api/genres', (req, res) => {
    // Validate
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // If true, create object && push && return result.
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }

    genres.push(genre);
    res.send(genres);
});

// Update aka Put
app.put('/api/genres/:id', (req, res) => {
    //Get genre
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('404: Genre Not Found');

    //Validation of new name
    const { error } = validateGenre(req.body.name);
    if (error) return res.status(400).send(error.details[0].message);

    //Change name && show the new genre
    genre.name = req.body.name; 
    res.send(genre);
});

// Delete aka .. delete
app.delete('/api/genres/:id', (req, res) => {
    // Get genre
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('404: Genre Not Found');

    // Splice it (need a future fix that doesn't mutate)
    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    // Return genres
    res.send(genres);
});

// DRY.
function validateGenre(genre) {
    const schema = { name: Joi.string().min(3).required() }
    return Joi.validate(genre, schema);
};

// Port SETUP
const port = process.env.port || 3000;
app.listen(port, () => { console.log(`Listening on Port ${port}.`); });