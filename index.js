const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 3001;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Mongo_DB Connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
