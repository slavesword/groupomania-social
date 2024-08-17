const express = require('express');
const dotenv = require('dotenv');
const postRoutes = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
