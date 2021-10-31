const phuKienModel = require("../models/phukien.model.js");
const mongoose = require("mongoose");
module.exports = {
    getInfo: (req, res) => {
        phuKienModel.findOne({ urlSanPham: "/phukien/chitiet/"+req.params.name })
            .lean()
            .then((danhsach) => {
                console.log(danhsach.thongtin)
                res.render("chitiet_a2", { accessories: danhsach })
            });
    }
}