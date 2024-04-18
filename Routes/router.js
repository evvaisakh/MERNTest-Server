const express = require('express')
const userController = require('../Controllers/userController')

const router = new express.Router()

// register
router.post('/register', userController.register)
// get all students
router.get('/all-students', userController.getAllStudents)

module.exports = router