const mayTinhBangModel = require("../models/maytinhbang.model.js");
const mongoose = require("mongoose");
module.exports = {
    getList: (req, res) => {
        if (req.query['giaSanPham'] == 1 || req.query['giaSanPham'] == -1) {
            mayTinhBangModel.find().sort({ giaSanPham: req.query['giaSanPham'] })
                .lean()
                .then((danhsach) => {
                    res.render("maytinhbang", { tablets: danhsach.slice(0, 20) })
                    console.log(danhsach)
                });
        } else {
            mayTinhBangModel.find()
                .lean()
                .then((danhsach) => {
                    res.render("maytinhbang", { tablets: danhsach.slice(0, 20) })
                    console.log(danhsach)
                });
        }
    }
}