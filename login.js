// The below code will include the MySQL, Express, Express-session, and Path modules, and associate them with the variables we have declared.

const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

// ! ----------------------------------------------------------
// Before we implement the database connection code, we need a database to connect to. Therefore, we must execute the below SQL statement either with command line or your preferred MySQL Editor. Make sure the MySQL server is running on port 3306.

// ? CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
// ? USE `nodelogin`;

// ? CREATE TABLE IF NOT EXISTS `accounts` (
// ?  `id` int(11) NOT NULL AUTO_INCREMENT,
// ?  `username` varchar(50) NOT NULL,
// ?  `password` varchar(255) NOT NULL,
// ?  `email` varchar(100) NOT NULL,
// ?  PRIMARY KEY (`id`)
// ? ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

// ? INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

// The above SQL statement will create the database (nodelogin) and create the accounts table. In addition, it will insert a test account that we can use for testing purposes.

// ! ----------------------------------------------------------
// We can now connect to our database with the following code:

// The connection details must reflect your database credentials. In most local environments, the default username is root, so you might not have to change anything, but in production mode, we highly suggest you change the default username for MySQL and set a strong password.

// Express is what we'll use for our web application, which includes packages that are essential for server-side web development, such as sessions and handling HTTP requests.

// Add the following code to initialize express:

const app = express();

// ! ----------------------------------------------------------
// After, we need to associate the modules we'll be using with Express:

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Make sure to update the secret code variable when declaring the session function as it will used to secure the session data. We'll be using sessions to determine whether the user is logged-in or not. The json and urlencoded methods will extract the form data from our login.html file.

// After, we need to declare the login route that will output our login.html file to the client using a GET request.

// ! ----------------------------------------------------------
// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

// When the client establishes a new connection to our Node.js server, it will output the login.html file.

// Next, we need to add a new route that will authenticate the user.


// ! ----------------------------------------------------------
// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


// ! ----------------------------------------------------------
// create the home route that will output the user's username.

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

// ! ----------------------------------------------------------
app.listen(3000);

// To start our Node.js app, we can execute the command node login.js in command line. If we navigate to http://localhost:3000/ in our browser, we should see the login form
