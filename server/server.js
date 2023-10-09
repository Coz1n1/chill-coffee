require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const stripe = require("stripe")(processs.env.STRIPE_PRIVATE_KEY);

app.listen(3001);
