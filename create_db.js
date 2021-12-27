import { User, Categorie, /*User_Cat,*/ Unit, /*Cat_Unit,*/ Content , Unit_Content , Tag} from './models/index.js'

export async function createDB() {
    
    // await db.sync();

    // User Creation
    const userTest = await User.create({ firstname: "Maria Grazia", lastname: "Le Mura", email: "lemura.mariagrazia@virgilio.it", password: "testtest", phone: '0677112233', address: "2 rue cour lou terral" })

    // Categorie Creation
    const catTestOne = await Categorie.create({ index: 0, title: "Anglais", img: "imgtest", label: "label", eval_intro: "intro", eval_mid: "mid" })
    const catTestTwo = await Categorie.create({ index: 0, title: "Espagnol", img: "imgtest", label: "label", eval_intro: "intro", eval_mid: "mid" })
    const catTestThree = await Categorie.create({ index: 0, title: "Bureautique", img: "imgtest", label: "label", eval_intro: "intro", eval_mid: "mid" })

    const tagTestOne = await Tag.create({index: 0, label: "Langue"})
    const tagTestTwo = await Tag.create({index: 0, label: "Informatique"})

    await catTestOne.setTag(tagTestOne);
    await catTestTwo.setTag(tagTestOne);
    await catTestThree.setTag(tagTestTwo);

    console.log("getTag : ", await tagTestOne.getCategories());

    // UserCat Association
    await userTest.addCategorie(catTestOne)
    await userTest.addCategorie(catTestTwo)
    //await userTest.addCategorie(catTestThree)

    console.log("getCategorie : ", await userTest.getCategories())

    // Unit Creation
    const unitTestOne = await Unit.create({ index: 0, title: "UNIT TEST 1", img: "ola", label: "rouge" })
    const unitTestTwo = await Unit.create({ index: 0, title: "UNIT TEST 1", img: "ola", label: "rouge" })
    const unitTestThree = await Unit.create({ index: 0, title: "UNIT TEST 1", img: "ola", label: "rouge" })

    //CatUnit Association
    await catTestOne.addUnit(unitTestOne);
    await catTestOne.addUnit(unitTestTwo);
    await catTestOne.addUnit(unitTestThree);

    console.log("getUnit : ", await catTestOne.getUnits())
   
    const unitContentOne = await Unit_Content.create({index: 0, label: "UNIT CONTENT TEST 1", img: "img"})
    const unitContentTwo = await Unit_Content.create({index: 0, label: "UNIT CONTENT TEST 2", img: "img"})
    const unitContentThree = await Unit_Content.create({index: 0, label: "UNIT CONTENT TEST 3", img: "img"})

    await unitContentOne.setUnit(unitTestOne);
    await unitContentTwo.setUnit(unitTestOne);
    await unitContentThree.setUnit(unitTestOne);

    console.log("getUnitContent : ", await unitTestOne.getUnit_Contents())

    // Content Creation
    const contentTestOne = await Content.create({ index: 0, label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", type: "txt" })
    const contentTestTwo = await Content.create({ index: 0, url: "https://www.youtube.com/embed/eGkGNCUQtWY", type: "video" })
    // const contentTestThree = await Content.create({ index: 0, label: "CONTENT TEST 3", url: "ola", type: "pdf" }) TODO CHECK PDF

    // UnitContent Association
    await unitContentOne.addContent(contentTestOne)
    await unitContentOne.addContent(contentTestTwo)
    // await unitContentOne.addContent(contentTestThree)


     console.log("getContent : ", await unitContentOne.getContents())

  
}