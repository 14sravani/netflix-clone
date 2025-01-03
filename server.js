const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON requests

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000; // Change to 3001 or any other available port
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});