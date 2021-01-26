//importing
import express from 'express';
// const express = require('express');

const app = express();

const port = process.env.PORT || 9000;
//app config

//middleware

//database config

//api routes

app.get('/', (req, res) => res.status(200).send('hello'));

//listen
app.listen(port, () => console.log(`Running on Port ${port}`));
