const db = require("../connectDB");
const mongoose = require("mongoose");

const dienThoaiSchema = new mongoose.Schema({
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
        collection: "dienthoai",
    });

var dienThoaiModel = mongoose.model("dienthoai", dienThoaiSchema);
module.exports = dienThoaiModel;

