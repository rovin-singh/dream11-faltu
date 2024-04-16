"use strict";
const mongoose = require("mongoose");
let DB_HOST = 'mongodb://0.0.0.0:27017/'
const connection = async () => {
    try {
        const DB_OPTIONS = { dbName: process.env.DB_NAME };
        mongoose.set("strictQuery", false);
        await mongoose.connect(DB_HOST, DB_OPTIONS);
    } catch (error) {
        console.log(error, "ROVINSUIF");
    }
};

module.exports = connection;
