// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Categorie = db.define('Categorie', {
  index: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  title: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  },
  img: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
  label: {
    type: new DataTypes.TEXT,
    allowNull: false,
  },
  eval_intro: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
  eval_mid: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
}, {
  // Freeze Table Name
  freezeTableName: true
});


// Export model User
export default Categorie;