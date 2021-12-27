// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import Categorie from "./Categorie.js";
import User from "./User.js";

const { DataTypes } = Sequelize;

const User_Cat = db.define('User_Cat', {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    CategorieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorie,
        key: 'id'
      }
    }
  }, {
    // Freeze Table Name
    freezeTableName: true
  });

 

  export default User_Cat;