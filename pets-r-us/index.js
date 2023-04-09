/*
    ==================
    Title: index.js, 
    Author: Michael Christman
    Date: April 9th, 2023
    Description: This is the index.js file for the pets-r-us repo and provides the background for the Pets-R-Us site. It will establish a server connection and instructing the Node.js environment what modules and files to select and how to use them.
*/


//List of modules
const express = require('express');
const path = require('path');

//Enables access to utilize Express.js
const app = express();


//Notifies the router where to locate files, it will instruct to utilize EJS to create Views and that the files will be inside the Views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


//Name of the server established for the Pets-R-Us website
const PORT = process.env.PORT || 3000;


//If the server receives either '<petsrus/>' or '<petsrus/index>', it will locate to the landing page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us Landing', 
        message: 'Welcome to Pets-R-Us!'
    })
});
app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us Landing', 
        message: 'Welcome to Pets-R-Us!'
    })
});

//If server receives '<petsrus/groomiing>', it will locate to the grooming page
app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us Grooming',
        message: 'Grooming Appointments'
    })
})

//The applications listens to the PORT server created on line 26
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});
