const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userActionsRoute = require('./routes/userActions');

const port = process.env.SERVER_PORT || 4000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/', userActionsRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
