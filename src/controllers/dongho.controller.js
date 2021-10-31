const dongHoModel = require("../models/dongho.model.js");
const mongoose = require("mongoose");
module.exports = {
    getList: (req, res) => {
        if (req.query['giaSanPham'] == 1 || req.query['giaSanPham'] == -1) {
            dongHoModel.find().sort({ giaSanPham: req.query['giaSanPham'] })
                .lean()
                .then((danhsach) => {
                    res.render("dongho", { watchs: danhsach.slice(0, 20) })
                    console.log(danhsach)
                });
        }
        else {
            dongHoModel.find()
            .lean()
            .then((danhsach) => {
                res.render("dongho", { watchs: danhsach.slice(0, 20) })
                console.log(danhsach)
            });

        }
    }
}