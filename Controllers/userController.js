const users = require('../Models/userModel')

// register
exports.register = async (req, res) => {
    console.log("Inside Register request!!!");
    const { firstname, lastname, mobile, address, email, password, gender, dateOfBirth, course } = req.body
    console.log(firstname, lastname, mobile, address, email, password, gender, dateOfBirth, course);
    try {
        // check email is present in db or not
        const existingUser = await users.findOne({ email })
        // if email is present then existing user
        if (existingUser) {
            res.status(406).json("Student already exists!!!")
        } else {
            // else store data to db
            const newUser = new users({
                firstname, lastname, mobile, address, email, password, gender, dateOfBirth, course
            })
            // to store data to mongodb from mongoose model
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get all projects
exports.getAllStudents = async (req, res) => {
    try {
        const allStudents = await users.find()
        res.status(200).json(allStudents)
    } catch (err) {
        res.status(401).json(err)
    }
}