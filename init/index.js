const mongoose = require('mongoose');
const initdata = require('./data.js');//data
const Listing = require('../models/listing.js');//model and schema of mongoose

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
}
main().then((res) => {
    console.log("connected to db")
}).catch((error) => {
    console.log(error)
});

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({
       ...obj,
       owner:'6925a4fcee245ab1b4eb9f03',
    }));
    await Listing.insertMany(initdata.data);
    console.log("data inserted");
};
initDB();




