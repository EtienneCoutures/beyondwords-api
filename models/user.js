// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define('User', {
  firstname: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  lastname: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  phone: {
    type: new DataTypes.STRING(64),
    allowNull: false,
  },
  address: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  },
}, {
  // Freeze Table Name
  freezeTableName: true
});



// Export model User
export default User;