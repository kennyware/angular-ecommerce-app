const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const db = mongoose.connection;

const app = express();

const port = process.env.PORT || 8080;
const users = require('./routes/users');
const products = require('./routes/products');

app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Init Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Routes
app.use('/users', users);
app.use('/products', products)

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.set('port', port);

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port') + '...');
})