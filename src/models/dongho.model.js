const db = require("../connectDB");
const mongoose = require("mongoose");

const dongHoSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    tenSanPham: String,
    giaSanPham: String,
    hinhSanPham: String,
    urlSanPham:String,
    mauSanPham: [String],
    dungluongSanPham: [String],
    maSanPham: String
},
    {
        collection: "dongho",
    });

var dongHoModel = mongoose.model("dongho", dongHoSchema);
module.exports = dongHoModel;

