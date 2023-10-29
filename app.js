const express = require('express');
const cors = require('cors');
const { convertImage, downloadConvertedImage } = require('./convertImage');

const app = express();

app.use(cors());

app.post('/', convertImage);

app.get('/download', downloadConvertedImage);

app.listen(process.env.PORT || 5500, () => console.log(`listening on port ${process.env.PORT} or 5500`));