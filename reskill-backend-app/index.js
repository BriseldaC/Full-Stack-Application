const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Specify allowed origins
  methods: 'GET, POST, PUT, DELETE', // Specify allowed HTTP methods
  credentials: true, // Allow sending credentials (cookies, authorization headers)
})); // Enable CORS

// Third-party API URLs
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

// Combine data and create an endpoint
app.get('/', async (req, res) => {
  try {
    const [photosResponse, postsResponse] = await Promise.all([
      axios.get(photosUrl),
      axios.get(postsUrl),
    ]);

    const photos = photosResponse.data;
    const posts = postsResponse.data;

    // Combine posts with their corresponding photos
    const combinedData = posts.map(post => {
      const postPhotos = photos.filter(photo => photo.id === post.id);
      return { ...post, photos: postPhotos };
    });


    res.json(combinedData);
   // console.log(combinedData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching or combining data' });
  }
});

app.get('/singlepost/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const [photosResponse, postsResponse] = await Promise.all([
      axios.get(photosUrl),
      axios.get(postsUrl),
    ]);

    const photos = photosResponse.data;
    const posts = postsResponse.data;

    // Combine posts with their corresponding photos
    const combinedData = posts.map(post => {
      const postPhotos = photos.filter(photo => photo.id === post.id);
      return { ...post, photos: postPhotos };
    });


    res.json(id);
   // console.log(combinedData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching or combining data' });
  }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

