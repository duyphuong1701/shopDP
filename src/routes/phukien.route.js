const express = require("express");
const route = express.Router();
const controller = require('../controllers/phukien.controller.js')

route.get("/",controller.getList)

module.exports =route;