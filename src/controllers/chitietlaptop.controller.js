const laptopModel = require("../models/laptop.model.js");
const mongoose = require("mongoose");
module.exports = {
    getInfo: (req, res) => {
        laptopModel.findOne({ urlSanPham: "/laptop/chitiet/"+req.params.name })
            .lean()
            .then((danhsach) => {
                console.log(danhsach.thongtin)
                res.render("chitiet", { items: danhsach })
            });
    }
}