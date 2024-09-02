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



// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// // Endpoint for fetching all posts
// app.get('/posts', async (req, res) => {
//   try {
//     const postsURL = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     const postsIDURL = await axios.get('https://jsonplaceholder.typicode.com/photos');
//     const combinedData = {
//       posts: [...postsURL.data.posts, ...postsIDURL.data.posts],
//       meta: {
//           total: postsURL.data.total + postsIDURL.data.total
//       }
//   };
//   res.json(combinedData);
//   } catch (error) {
//     res.status(500).json({   
// error: 'Failed to fetch posts' });
//   }
// });

// // Endpoint for fetching a specific post by ID
// app.get('/posts/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({   
// error: 'Failed to fetch post' });
//   }
// });


//  app.listen(port, () => {
//    console.log(`Server listening on port ${port}`);
//  });


// const express = require("express");
// const app = express();
// //import posts from './posts';
// //import postsID from './postsID';

// app.get("/", (req,res)=>{
//   res.send("Server is ready")
// });

// app.get("/api/posts", (req, res)=>{
//   res.send(posts)
// })

// const port = process.env.port || 3000;


// app.listen(port,()=>{
//   console.log(`Server at http://localhost:${port}`);
// })


// app.get("/:id", (req, res) => {
//   res.send(`Get User With ID ${req.params.id}`)

// })



// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();

// app.use(cors({
//     origin: 'http://localhost:5173', // Replace with your frontend's origin
//     methods: 'GET', // Specify allowed HTTP methods
//     allowedHeaders: 'Content-Type', // Specify allowed headers
// }));

// // Endpoint to fetch combined data from both 3rd party APIs
// app.get('/posts', async (req, res) => {
//   try {
//     // Fetch data from the first API (posts)
//     const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

//     // Fetch data from the second API (photos)
//     const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos');

//     // Combine the data from both APIs
//     const posts = postsResponse.data.map((post, index) => {
//       return {
//         ...post,
//         photo: photosResponse.data[index] // Pair each post with a corresponding photo
//       };
//     });

//     // Send the combined data as the response
//     res.json(posts);
//   } catch (error) {
//     // Handle any errors that occur during the API requests
//     console.error('Error fetching data:', error);
//     res.status(500).json({ message: 'Error fetching data from APIs' });
//   }
// });

// // Start the Express server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
