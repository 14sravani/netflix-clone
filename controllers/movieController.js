const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addMovie = async (req, res) => {
  const { title, description, genre, releaseDate, imageUrl } = req.body;
  try {
    const newMovie = new Movie({ title, description, genre, releaseDate, imageUrl });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description, genre, releaseDate, imageUrl } = req.body;
  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.title = title;
    movie.description = description;
    movie.genre = genre;
    movie.releaseDate = releaseDate;
    movie.imageUrl = imageUrl;

    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    await movie.remove();
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getMovies, addMovie, updateMovie, deleteMovie };
