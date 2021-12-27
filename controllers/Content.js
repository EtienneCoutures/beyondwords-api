// Import model Content
import Content from "../models/Content.js";

// Get all content
export const getContents = async (req, res) => {
    try {
        const content = await Content.findAll();
        res.send(content);
    } catch (err) {
        console.log("getContents err :", err);
    }
}

// Get content by id
export const getContentById = async (req, res) => {
    try {
        const content = await Content.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(content[0]);
    } catch (err) {
        console.log("getContentById err : ", err);
    }
}

// Get content by Unit_Content id
export const getContentbyUnitContentId = async (req, res) => {
    try {
        const contents = await Content.findAll({
            where: {
                UnitContentId: req.params.id
            }
        });
        res.json(contents);
    } catch {
        console.log("getContentbyUnitContentId err : ", err);
    }
}

// Create content
export const createContent = async (req, res) => {
    try {
        await Content.create(req.body);
        res.json({
            "message": "Content Created"
        });
    } catch (err) {
        console.log("createContent err : ", err);
    }
}

// Update content by id
export const updateContent = async (req, res) => {
    try {
        await Content.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Content Updated"
        });
    } catch (err) {
        console.log("updateContent err : ", err);
    }
}


// Delete content by id
export const deleteContent = async (req, res) => {
    try {
        await Content.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Content Deleted"
        });
    } catch (err) {
        console.log("deleteContent err : ", err);
    }
}