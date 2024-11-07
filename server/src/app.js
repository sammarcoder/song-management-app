const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT= 8081
const config = require('./config/config')
const {sequelize} = require('./models')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app)
require('dotenv').config();

sequelize.sync()
.then(()=>{
    app.listen(config.port || 8081)
    console.log(`server runinig on port ${config.port}`)
})