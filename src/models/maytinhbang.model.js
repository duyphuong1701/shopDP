const db = require("../connectDB");
const mongoose = require("mongoose");

const mayTinhBangSchema = new mongoose.Schema({
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
        collection: "maytinhbang",
    });

var mayTinhBangModel = mongoose.model("maytinhbang", mayTinhBangSchema);
module.exports = mayTinhBangModel;

