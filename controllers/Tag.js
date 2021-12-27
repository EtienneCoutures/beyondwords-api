// Import model Unit
import Tag from "../models/Tag.js";

// Get all tag


// Get tag by id
export const getTagById = async (req, res) => {
    try {
        const tag = await Tag.findOne({
            where: {
                id: req.params.id
            },
            // include: Unit_Content
        });
        res.send(tag);
    } catch (err) {
        console.log("getTagById err : ", err);
    }
}

// Create tag
export const createTag = async (req, res) => {
    try {
        await Tag.create(req.body);
        res.json({
            "message": "Tag Created"
        });
    } catch (err) {
        console.log("createTag err : ", err);
    }
}

// Update tag by id
export const updateTag = async (req, res) => {
    try {
        await Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Tag Updated"
        });
    } catch (err) {
        console.log("updateTag err : ", err);
    }
}


// Delete tag by id
export const deleteTag = async (req, res) => {
    try {
        await Tag.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Tag Deleted"
        });
    } catch (err) {
        console.log("deleteTag err : ", err);
    }
}