const express = require("express");
const route = express.Router();
const controller = require('../controllers/dienthoai.controller.js')

route.get("/",controller.getList)

module.exports =route;