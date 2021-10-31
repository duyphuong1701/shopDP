const express = require("express");
const path = require("path");
const app = express();
var morgan = require('morgan')
const port = 3000;
// template engine
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')
app.use(express.static('public'));
// encode url
app.use(express.urlencoded({ extended: true }))
// morgan middleware
app.use(morgan('dev'))

// route
const dienthoai = require('./routes/dienthoai.route.js');
const laptop = require('./routes/laptop.route.js');
const maytinhbang = require('./routes/maytinhbang.route.js');
const dongho = require('./routes/dongho.route.js');
const phukien = require('./routes/phukien.route.js');

const chitietdienthoai = require('./routes/chitietdienthoai.route.js');
const chitietmaytinhbang = require('./routes/chitietmaytinhbang.route.js');
const chitietlaptop = require('./routes/chitietlaptop.route.js');
const chitietdongho = require('./routes/chitietdongho.route.js');
const chitietphukien = require('./routes/chitietphukien.route.js');

const trangchu = require('./routes/trangchu.route.js');
// url set
app.use("/dienthoai", dienthoai)
app.use("/phukien", phukien)
app.use("/laptop", laptop)
app.use("/maytinhbang", maytinhbang)
app.use("/dongho", dongho)

app.use("/dienthoai/chitiet", chitietdienthoai)
app.use("/maytinhbang/chitiet", chitietmaytinhbang)
app.use("/laptop/chitiet", chitietlaptop)
app.use("/dongho/chitiet", chitietdongho)
app.use("/phukien/chitiet", chitietphukien)
app.use("/", trangchu)

app.listen(port, () => console.log(`App listening to port ${port}`));