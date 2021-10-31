const dienThoaiModel = require("../models/dienthoai.model.js");
const mongoose = require("mongoose");
module.exports = {
    getList: (req, res) => {
        console.log(req.query)
        if (req.query['giaSanPham'] == 1 || req.query['giaSanPham'] == -1) {
            dienThoaiModel.find().sort(req.query)
                .lean()
                .then((danhsach) => {
                    res.render("dienthoai", { phones: danhsach.slice(0, 20) })
                });
        }
        else {
            dienThoaiModel.find()
                .lean()
                .then((danhsach) => {
                    res.render("dienthoai", { phones: danhsach.slice(0, 20) })
                });
        }
    },
}