const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { port, appName, MONGO_URI } = require('./config/env');
const projectRoutes = require('./routes/routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send(`${appName} is running...`);
});


mongoose.connect(MONGO_URI)
.then(() => {
  console.log("Connected to MongoDB Atlas");

  app.listen(port, () => {
    console.log(`${appName} is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
  process.exit(1);
});
