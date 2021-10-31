const phuKienModel = require("../models/phukien.model.js");
const mongoose = require("mongoose");
module.exports = {
    getList: (req, res) => {
        if (req.query['giaSanPham'] == 1 || req.query['giaSanPham'] == -1) {

            phuKienModel.find().sort({ giaSanPham: req.query['giaSanPham'] })
                .lean()
                .then((danhsach) => {
                    res.render("phukien", { accessories: danhsach.slice(0, 20) })
                    console.log(danhsach)
                });
        } else {
            phuKienModel.find()
                .lean()
                .then((danhsach) => {
                    res.render("phukien", { accessories: danhsach.slice(0, 20) })
                    console.log(danhsach)
                });
        }
    }
}