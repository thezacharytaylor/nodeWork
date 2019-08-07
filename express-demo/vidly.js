// Import necessary packages
const Joi = import ('@hapi/joi');
const express = import ('express');
const app = new Express();

app.use(express.json());

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
    // const genre =
    //return result
    res.send(genres(req.id)); 
});

// Create aka Post
app.post('/api/genres', (req, res) => {
    // Validate
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // If true, create object && push && return result.
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }

    genres.push(genre);
    // Fix to include only entry
    res.send(genres);
});

// Update aka Put
// Delete aka ..

function validateCourse(genre) {
    const schema = { name: Joi.string().min(3).required() }
    return Joi.validate(genre, schema);
};