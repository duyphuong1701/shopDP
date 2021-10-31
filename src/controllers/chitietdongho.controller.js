const dongHoModel = require("../models/dongho.model.js");
const mongoose = require("mongoose");
module.exports = {
    getInfo: (req, res) => {
        dongHoModel.findOne({ urlSanPham: "/dongho/chitiet/"+req.params.name })
            .lean()
            .then((danhsach) => {
                console.log(danhsach.thongtin)
                res.render("chitiet", { items: danhsach })
            });
    }
}