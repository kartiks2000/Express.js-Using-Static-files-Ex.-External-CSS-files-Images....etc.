// Using Static files
// Static files Ex. CSS, Images....etc.
// we use "express.static()" to Aknowledging Static files folder
// We usually create a folder for static file in our project rrot directory called "public"
// we have subfolders in "public" folder for css files, Images and other static files.
// Then we need to pass the path of our project root directory from the OS root directory and then we need to join the path from project root directory to the "public" folder.
// Then we can use our static files from anywhere in our project. 
// Check "product.html" and "addproduct.html" in the "views" folder to see how to import static files.

const express = require('express');
const path = require('path');

// Importing my own router file "admin.js" and "shop.js"
const adminroutes = require('./router/admin');
const shoproutes = require('./router/shop');

const bodyparser = require('body-parser');

const app = express();

// Aknowledging Static files folder that is "public"
app.use(express.static(path.join(__dirname,"public")));


app.use(bodyparser.urlencoded({extended:false}))

app.use(shoproutes);

app.use(adminroutes);

app.listen(3000);

