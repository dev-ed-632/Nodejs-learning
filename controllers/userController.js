const { User } = require("../models");


const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // const user = await User.create({
        //     name: name,
        //     email: email,
        //     password: password
        // });

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: "User created successfullyyyyyyyyyy",
            data: user,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to retrieve users",
            error: error.message
        });
    }
}

module.exports = {
    createUser,
    getAllUsers
};