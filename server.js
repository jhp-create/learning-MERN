const express = require('express');
//import express from 'express';

const app = express();
app.use(express.static('static'));

app.listen(3000, () => {
  console.log('App started on port 3000')
});
