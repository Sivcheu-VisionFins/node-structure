const api = process.env.API_URL;
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log(api);
  console.log('Server is running http://localhost:3000');
});
