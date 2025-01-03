import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g. clearing localStorage)
    navigate('/login');
  };

  // Static movie data
  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      genre: "Sci-Fi",
      releaseDate: "2010-07-16",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "Batman faces the Joker in this action-packed thriller.",
      genre: "Action",
      releaseDate: "2008-07-18",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A journey through space to save humanity.",
      genre: "Sci-Fi",
      releaseDate: "2014-11-07",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 4,
      title: "The Matrix",
      description: "A hacker discovers a dystopian world controlled by machines.",
      genre: "Sci-Fi",
      releaseDate: "1999-03-31",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genre: "Drama",
      releaseDate: "1994-09-23",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 6,
      title: "Fight Club",
      description: "An insomniac office worker and a soap salesman build a global organization to help vent male aggression.",
      genre: "Drama",
      releaseDate: "1999-10-15",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 7,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      genre: "Crime",
      releaseDate: "1994-10-14",
      imageUrl: "https://m.media-amazon.com/images/I/914mMOJHWVL.jpg"
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      description: "The Avengers assemble to undo the damage caused by Thanos and restore balance to the universe.",
      genre: "Action",
      releaseDate: "2019-04-26",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 9,
      title: "Spider-Man: No Way Home",
      description: "Peter Parker seeks help from Doctor Strange to erase everyone's memory of him being Spider-Man.",
      genre: "Action",
      releaseDate: "2021-12-17",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: 10,
      title: "Major",
      description: "The life story of Major Sandeep Unnikrishnan, a martyr who died in the 26/11 attacks in Mumbai.",
      genre: "Biographical",
      releaseDate: "2022-06-03",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Major_The_Film.jpg/220px-Major_The_Film.jpg"
    },
    {
      id: 11,
      title: "RRR",
      description: "A fictional story of two revolutionaries, Alluri Sitarama Raju and Komaram Bheem, set in 1920s India.",
      genre: "Action",
      releaseDate: "2022-03-25",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
    },
    {
      id: 12,
      title: "Mahesh Babu's Sarileru Neekevvaru",
      description: "An Army major returns home to resolve family issues and fight against corrupt forces.",
      genre: "Action, Comedy",
      releaseDate: "2020-01-11",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/42/Sarileru_Neekevvaru.jpg"
    },
    {
      id: 13,
      title: "Mahesh Babu's Maharshi",
      description: "A successful businessman returns to his village and learns life lessons from the people around him.",
      genre: "Drama, Action",
      releaseDate: "2019-05-09",
      imageUrl: "https://resizing.flixster.com/Le9gp2687GGJfDHmq4rBe3OL75g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkxMWI1MDM5LTQ0ZjAtNDA0NS1iNDg5LWZlNGVhYjMyOTIwMy53ZWJw"
    }
  ];

  return (
    <div className="netflix-container">
      <div className="header-container">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <div className="movie-meta">
                <span>{movie.year}</span>
                <span>{movie.genre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
