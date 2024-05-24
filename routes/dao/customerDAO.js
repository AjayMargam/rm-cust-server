const getDB = require('../../utils/getDBConn')

async function loginDAO(data) {
    const db = await getDB()
    const collection = db.collection("customers")
    const result = await collection.findOne(data)
    return result;
}

async function regDAO(data) {
    console.log("dao")
    const db = await getDB();
    const collection = db.collection("customers")
    const result = await collection.insertOne(data);
    return result;
}

module.exports = {
    regDAO,
    loginDAO
}