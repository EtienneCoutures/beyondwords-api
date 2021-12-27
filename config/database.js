// import sequelize
import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize('beyond_words', 'beyond', 'beyond', {
    host: 'localhost',
    dialect: 'mysql'
});

// export connection
export default db;