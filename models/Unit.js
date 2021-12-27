// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Unit = db.define('Unit', {
  index: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: 0
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
}, {
  // Freeze Table Name
  freezeTableName: true
});


// Export model User
export default Unit;