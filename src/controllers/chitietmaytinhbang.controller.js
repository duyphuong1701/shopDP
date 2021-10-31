const mayTinhBangModel = require("../models/maytinhbang.model.js");
const mongoose = require("mongoose");
module.exports = {
    getInfo: (req, res) => {
        mayTinhBangModel.findOne({ urlSanPham: "/maytinhbang/chitiet/"+req.params.name })
            .lean()
            .then((danhsach) => {
                console.log(danhsach.thongtin)
                res.render("chitiet", { items: danhsach })
            });
    }
}