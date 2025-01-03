// Static list of movies
const movies = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      genre: 'Sci-Fi',
      releaseDate: '2010-07-16',
      imageUrl: 'https://example.com/inception.jpg'
    },
    {
      title: 'The Dark Knight',
      description: 'Batman battles the Joker',
      genre: 'Action',
      releaseDate: '2008-07-18',
      imageUrl: 'https://example.com/darkknight.jpg'
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time',
      genre: 'Sci-Fi',
      releaseDate: '2014-11-07',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg'
    }
  ];
  
  router.get('/', (req, res) => {
    res.json(movies);
  });
  