// Import model Categorie
import Categorie from "../models/Categorie.js";
import Tag from "../models/Tag.js";
import Unit from "../models/Unit.js";

// Get all categorie
export const getCategories = async (req, res) => {
    try {
        const categorie = await Categorie.findAll();
        console.log("//////////////", categorie)
    } catch (err) {
        console.log("getCategories err :", err);
    }
}

export const getTags = async (req, res) => {
    try {
        const tag = await Tag.findAll();
        res.send(tag);
    } catch (err) {
        console.log("getTags err :", err);
    }
}

// Get categorie by id
export const getCategorieById = async (req, res) => {
    try {
        const categorie = await Categorie.findOne({
            where: {
                id: req.params.id
            },
            include: Unit
        });
        res.send(categorie);
    } catch (err) {
        console.log("getCategorieById err : ", err);
    }
}

// Create categorie
export const createCategorie = async (req, res) => {
    try {
        await Categorie.create(req.body);
        res.json({
            "message": "Categorie Created"
        });
    } catch (err) {
        console.log("createCategorie err : ", err);
    }
}

// Update categorie by id
export const updateCategorie = async (req, res) => {
    try {
        await Categorie.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Categorie Updated"
        });
    } catch (err) {
        console.log("updateCategorie err : ", err);
    }
}


// Delete categorie by id
export const deleteCategorie = async (req, res) => {
    try {
        await Categorie.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Categorie Deleted"
        });
    } catch (err) {
        console.log("deleteCategorie err : ", err);
    }
}

export const getCategorieUnits = async (req, res) => {
    try {
        const cat = await Categorie.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(await cat.getUnits());
    } catch (err) {
        console.log("getCategorieUnits err : ", err)
    }
}

