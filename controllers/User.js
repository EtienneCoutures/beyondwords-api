// Import model User
import Categorie from "../models/Categorie.js";
import User from "../models/User.js";
import _ from 'lodash';
import { Sequelize } from "sequelize";

// Login
export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })
        res.send(user);
    } catch (err) {
        console.log("login err :", err);
    }
}

// Get all user
export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log("getUsers err :", err);
    }
}

// Get user by id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(user);
    } catch (err) {
        console.log("getUserById err : ", err);
    }
}

// Create user
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (err) {
        console.log("createUser err : ", err);
    }
}

// Update user by id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (err) {
        console.log("updateUser err : ", err);
    }
}


// Delete user by id
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.log("deleteUser err : ", err);
    }
}

export const getUserCategories = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(await user.getCategories());
    } catch (err) {
        console.log("getUserCategories err : ", err);
    }
}

// Get 
export const getUserCategoriesOtherById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        const Op = Sequelize.Op;
        const categories = await Categorie.findAll({
            where: {
                id: {[Op.notIn]:  _.map(await user.getCategories(), 'id')}
            }
        })
        res.send(categories)
    } catch (err) {
        console.log("createCategorie err : ", err);
    }
}


