const dienThoaiModel = require("../models/dienthoai.model.js");
const mayTinhBangModel = require("../models/maytinhbang.model.js");
const laptopModel = require("../models/laptop.model.js");

const mongoose = require("mongoose");
module.exports = {
    getIndex: (req, res) => {
        dienThoaiModel.find({}, function (err, result1) {
            mayTinhBangModel.find({}, function (err, result2) {
                laptopModel.find({}, function (err, result3) {
                    res.render('trangchu', { phones: result1.slice(0, 5), tablets: result2.slice(0, 5), laptops: result3.slice(0, 5) });
                });
            });
        });
    }
}