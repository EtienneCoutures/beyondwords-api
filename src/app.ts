import express from 'express';
import { Express } from "express-serve-static-core";
import { Sequelize } from 'sequelize';
import { User } from './models/user.model';
import { Categorie } from './models/categorie.model';
import { Unit } from './models/unit.model';
import { UserCat } from './models/user_cat.model';
import { initRoutes } from './routes/index';
import { sequelize_config } from './config/sequelizeConfig';
import passport from 'passport';
import cors from 'cors';

const port: number = 8080;

class Beyond {

    public app: Express;
    public sequelize: Sequelize;

    constructor() {
        this.initApp()
    }

    initApp() {
        this.initExpress()
        this.initSequelize()
    }

    initExpress() {

        this.app = express();
        this.app.use(cors({
            optionsSuccessStatus: 200
        }))
        this.app.use(express.json());
        this.app.use(passport.initialize());
        this.app.use(passport.authenticate('session'));

        initRoutes(this.app);

        this.app.listen(port, () => {
            console.log("Serveur à l'écoute sur le port : ", port)
        })
    }

    async initSequelize() {
        this.sequelize = new Sequelize(
            sequelize_config.db_name,
            sequelize_config.db_user,
            sequelize_config.db_pw,
            sequelize_config.sequelize_info as any
        );
        await this.sequelize.authenticate().then(() => {
            console.log("Connexion ok")
        }).catch(err => {
            console.log("err connexion : ", err)
        })
    }
}




export const beyond = new Beyond();

// (async () => {
//     const test = await beyond.sequelize.sync({ force: true });
//     console.log("test : ", test)
// })();


// (async () => {
//     const user = await User.findOne({where: {firstname: 'Bobiii'}})
//     const cat = await Categorie.findOne();
//     const unit = await Unit.findOne();

//     user.addCategories(cat);
//     cat.addUnits(unit);

//     console.log("user : ", user)
//     console.log("cat : ", cat)
//     console.log("unit : ", unit)

// })();

/*(async () => {
    let test = await beyond.sequelize.sync({ force: true });
    console.log("test : ", test)
})();*/
// TODO REMOVE CETTE MERDE ET FAIRE EN SORTE QUE LA SYNC NECRASE PAS LES ANCIENNES DATAS



// User.findOne({where: {firstname: 'Bob'}}).then(user => { console.log('user !', user)})
//  const user = new User();
//  user.firstname = "Bob";
//  user.lastname = "Foo";
//  user.email = "test@test.Fr";
//  user.phone = "0677112233";
//  user.password = 'testtest'
//  user.address = "Rue du test";
//  user.save().then(user => { console.log("user : ", user)}).catch(err => {
//      console.log("err -> ", err)
//  });

//  const user = new User();
//  user.firstname = "Bobiii";
//  user.lastname = "Fooiiiii";
//  user.email = "test@tesiiiiit.Fr";
//  user.phone = "0677112233";
//  user.password = 'testtest'
//  user.address = "Rue du test";
//  user.save().then(user => { console.log("user : ", user)}).catch(err => {
//      console.log("err -> ", err)
//  });

//  const categorie = new Categorie();
//  categorie.index = 0;
//  categorie.title = "titre test";
//  categorie.img = "img test";
//  categorie.label = "label test";
//  categorie.eval_intro = "intro test";
//  categorie.eval_mid = "mid test";
//  categorie.save().then(categorie => { console.log("categorie : ", categorie)}).catch(err => {
//      console.log("err -> ", err)
// });

// const unit = new Unit();
// unit.index = 0;
// unit.title = "titre test"
// unit.img = "img test";
// unit.label = "label test";
// unit.save().then(unit => { console.log("unit : ", unit)}).catch(err => {
//     console.log("err -> ", err)
// });

// const user_cat = new UserCat();
// user_cat.user_id = 1;
// user_cat.cat_id = 1;
// user_cat.save().then(user_cat => { console.log("user_cat : ", user_cat)}).catch(err => {
//     console.log("err -> ", err)
// });

//console.log("Is it true ? : ", User === this.sequelize.models.User); // true
/*(async () => {
    let test = await this.sequelize.sync({ force: true });
    // console.log("test : ", test)
    // console.log("yass queen :", sequelize)
    // Code here
})();¨*/

