// Import model Unit
import Unit from "../models/Unit.js";
import Unit_Content from "../models/Unit_Content.js";

// Get all unit
export const getUnits = async (req, res) => {
    try {
        const unit = await Unit.findAll();
        res.send(unit);
    } catch (err) {
        console.log("getUnits err :", err);
    }
}

// Get unit by id
export const getUnitById = async (req, res) => {
    try {
        const unit = await Unit.findOne({
            where: {
                id: req.params.id
            },
            include: Unit_Content
        });
        res.send(unit);
    } catch (err) {
        console.log("getUnitById err : ", err);
    }
}

// Create unit
export const createUnit = async (req, res) => {
    try {
        await Unit.create(req.body);
        res.json({
            "message": "Unit Created"
        });
    } catch (err) {
        console.log("createUnit err : ", err);
    }
}

// Update unit by id
export const updateUnit = async (req, res) => {
    try {
        await Unit.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Unit Updated"
        });
    } catch (err) {
        console.log("updateUnit err : ", err);
    }
}


// Delete unit by id
export const deleteUnit = async (req, res) => {
    try {
        await Unit.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Unit Deleted"
        });
    } catch (err) {
        console.log("deleteUnit err : ", err);
    }
}