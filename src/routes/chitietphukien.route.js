const express = require("express");
const route = express.Router();
const controller = require('../controllers/chitietphukien.controller.js')

route.get("/:name",controller.getInfo)

module.exports =route;