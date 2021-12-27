// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Tag = db.define('Tag', {
  index: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: 0
  },
  label: {
    type: new DataTypes.TEXT,
    allowNull: false,
  },
}, {
  // Freeze Table Name
  freezeTableName: true
});


// Export model User
export default Tag;