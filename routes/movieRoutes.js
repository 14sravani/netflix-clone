const express = require('express');
const router = express.Router();

// Example hardcoded movies data (You can modify this later)
const movies = [
  {
    id: 1,
    title: "Interstellar",
    description: "A journey through space and time",
    genre: "Sci-Fi",
    releaseDate: "2014-11-07",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg"
  },
  {
    id: 2,
    title: "Inception",
    description: "A mind-bending thriller",
    genre: "Sci-Fi",
    releaseDate: "2010-07-16",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o62V7ZaI-VowRpsQjdcn5sB76hbDpqURmU8LhBmh_jWXmORz"
  }
  // Add more movies if needed
];

// Route to get the movie list
router.get('/', (req, res) => {
  res.json(movies);
});

// Route to add a new movie (for demonstration purposes)
router.post('/', (req, res) => {
  const { title, description, genre, releaseDate, imageUrl } = req.body;
  const newMovie = { id: movies.length + 1, title, description, genre, releaseDate, imageUrl };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

module.exports = router;
