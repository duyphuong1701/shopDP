const laptopModel = require("../models/laptop.model.js");
const mongoose = require("mongoose");
module.exports = {
    getList: (req, res) => {
        if (req.query['giaSanPham'] == 1 || req.query['giaSanPham'] == -1) {
            laptopModel.find().sort({ giaSanPham: req.query['giaSanPham'] })
                .lean()
                .then((danhsach) => {
                    res.render("laptop", { laptops: danhsach.slice(0, 20) })
                    console.log(danhsach)
                });
        }
        else {
            laptopModel.find()
                .lean()
                .then((danhsach) => {
                    res.render("laptop", { laptops: danhsach.slice(0, 20) })
                });
        }
    }
}