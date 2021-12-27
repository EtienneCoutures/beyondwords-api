import Categorie from "./Categorie.js";
import User from "./User.js";
import Unit from './Unit.js';
import Content from './Content.js';
import Unit_Content from "./Unit_Content.js";
import Tag from "./Tag.js";

/* User cat association*/
User.belongsToMany(Categorie, { through: 'User_Cat', foreignKey: 'UserID' });
Categorie.belongsToMany(User, { through: 'User_Cat', foreignKey: 'CategorieID' });

// /* Cat unit association */
Categorie.belongsToMany(Unit, { through: 'Cat_Unit', foreignKey: 'CategorieID' });
Unit.belongsToMany(Categorie, { through: 'Cat_Unit', foreignKey: 'UnitID' });

Tag.hasMany(Categorie);
Categorie.belongsTo(Tag);

// /* Unit Content Association */
Unit.hasMany(Unit_Content);
Unit_Content.belongsTo(Unit);

Unit_Content.hasMany(Content, {
    as: "contents"
});
Content.belongsTo(Unit_Content)

export { User, Categorie, Unit, Content, Tag, Unit_Content };