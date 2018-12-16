const express = require('express');

const app = express();

app.use(express.static('dist/GieldaStronFacebookowych'));

app.listen(8000, () => { console.log('Server started');});

