import express from 'express';
import { Express } from "express-serve-static-core";
import { Sequelize } from 'sequelize';
import { User } from './models/user.model';
import { initRoutes } from './routes/index';

const port: number = 8080;

class Beyond {

    public app: Express;
    public sequelize: Sequelize;

    constructor() {
        this.initApp()
    }

    initApp() {
        this.initSequelize()
        this.initExpress()
    }

    initExpress() {
        this.app = express();
        initRoutes(this.app);
        /*this.app.use(cors({
            optionsSuccessStatus: 200
          }))   => Utile?  */

        this.app.listen(port, () => {
            console.log("Serveur à l'écoute sur le port : ", port)
        })
    }

    async initSequelize() {
        this.sequelize = new Sequelize(
            "db_beyond_words",
            "root",
            "", {
              "host": "localhost",
              "dialect": "mysql"
            }
          );
        await this.sequelize.authenticate().then(() => {
            console.log("Connexion ok")
        }).catch(err => {
            console.log("err connexion : ", err)
        })
    }
}

const beyond = new Beyond();

const user = new User();
user.firstname = "Bob";
user.lastname = "Foo";
user.email = "test@test.Fr";
user.phone = "0677112233";
user.address = "Rue du test";

user.save().then(user => { console.log("user : ", user)}).catch(err => {
    console.log("err -> ", err)
});
console.log("user : ", user)
//console.log("Is it true ? : ", User === this.sequelize.models.User); // true
/*(async () => {
    let test = await this.sequelize.sync({ force: true });
    // console.log("test : ", test)
    // console.log("yass queen :", sequelize)
    // Code here
})();¨*/