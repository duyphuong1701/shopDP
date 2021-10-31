const dienThoaiModel = require("../models/dienthoai.model.js");

const mongoose = require("mongoose");
module.exports = {
    getInfo: (req, res) => {
        dienThoaiModel.findOne({ urlSanPham: "/dienthoai/chitiet/"+req.params.name })
            .lean()
            .then((danhsach) => {
                res.render("chitiet", { items: danhsach })
            });
    }
}