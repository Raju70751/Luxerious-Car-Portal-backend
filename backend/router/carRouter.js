const express = require('express');
const router = express.Router(); // Create a router instance

const { getAllCars, createCar } = require('../controller/carController'); // Import controller functions
const authMiddelware = require('../authMiddleware/authMiddleware'); // Import authentication middleware

// Route to get all cars
router.get('/', getAllCars);    // Define GET route for /cars   

// Route to create a new car
router.post('/', authMiddelware, createCar);  // Define POST route for /cars

module.exports = router;

