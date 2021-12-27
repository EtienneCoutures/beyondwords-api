// Import express
import express from "express";
// Import passport 
import passport from "passport";

// Import Controller User
import {
    login,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserCategories,
    getUserCategoriesOtherById
} from "../controllers/User.js";

// Import Controller Categorie
import {
    getCategories,
    getCategorieById,
    getTags,
    createCategorie,
    updateCategorie,
    deleteCategorie,
} from "../controllers/Categorie.js";

// Import Controller Unit
import {
    getUnits,
    getUnitById,
    createUnit,
    updateUnit,
    deleteUnit,
} from "../controllers/Unit.js";

// Import Controller Content
import {
    getContentbyUnitContentId,
} from "../controllers/Content.js";


// Init express router
const router = express.Router();

const api = "/api";

/* USER ROUTES */

// Login route 
router.post(api + '/login', passport.authenticate('session', {
    successRedirect: '/',
    failureRedirect: '/login'
}), login);
// Route get all users
router.get(api + '/users', getUsers);
// Route get users by id
router.get(api + '/users/:id', getUserById);
// Route create users baru
router.post(api + '/users', createUser);
// Route update users by id
router.put(api + '/users/:id', updateUser);
// Route delete users by id
router.delete(api + '/users/:id', deleteUser);
// Route get user categorye by user id
router.get(api + '/users/:id/categories', getUserCategories)
// Route get cat not followed by user id in param
router.get(api + '/users/:id/others', getUserCategoriesOtherById)


/* CATEGORIE ROUTES */

// Route get all categories
router.get(api + '/categories', getCategories);
// Route get categories by id
router.get(api + '/categories/:id', getCategorieById);
// Route create categories baru
router.post(api + '/categories', createCategorie);
// Route update categories by id
router.put(api + '/categories/:id', updateCategorie);
// Route delete categories by id
router.delete(api + '/categories/:id', deleteCategorie);

router.get(api + '/tags', getTags);



/* UNIT ROUTES */

// Route get all units
router.get(api + '/units', getUnits);
// Route get units by id
router.get(api + '/units/:id', getUnitById);
// Route create units baru
router.post(api + '/units', createUnit);
// Route update units by id
router.put(api + '/units/:id', updateUnit);
// Route delete units by id
router.delete(api + '/units/:id', deleteUnit);

/* CONTENT ROUTES */
// Route get all Content of Unit_Contents
router.get(api + '/courses/:id', getContentbyUnitContentId);

/* TAG ROUTES */
// Route get all tags


// export router
export default router;