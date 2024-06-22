const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index.routes');
require('./routes/database');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
