// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Unit_Content from "./Unit_Content.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Content = db.define('Content', {
  index: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: 0
  },
  label: {
    type: new DataTypes.TEXT,
    allowNull: true,
  },
  url: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
  type: {
    type: new DataTypes.ENUM('pdf', 'video', 'txt'),
    allowNull: false,
  },
  UnitContentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Unit_Content,
      key: 'id'
    }
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});


// Export model User
export default Content;