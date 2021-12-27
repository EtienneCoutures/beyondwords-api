// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Unit from "./Unit.js";

const { DataTypes } = Sequelize;

const Unit_Content = db.define('Unit_Content', {
  UnitId: {
    type: DataTypes.INTEGER,
    references: {
      model: Unit,
      key: 'id'
    }
  },
  index: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: 0
  },
  label: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
  img: {
    type: new DataTypes.STRING(256),
    allowNull: true,
  },
}, {
  // Freeze Table Name
  freezeTableName: true
});



export default Unit_Content;