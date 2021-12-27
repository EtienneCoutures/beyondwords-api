// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Categorie from "./Categorie.js";
import Unit from "./Unit.js";

const { DataTypes } = Sequelize;

const Cat_Unit = db.define('Cat_Unit', {
    CatId: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorie,
        key: 'id'
      }
    },
    UnitId: {
      type: DataTypes.INTEGER,
      references: {
        model: Unit,
        key: 'id'
      }
    }
  }, {
    // Freeze Table Name
    freezeTableName: true
  });

 

  export default Cat_Unit;