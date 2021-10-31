const express = require("express");
const route = express.Router();
const controller = require('../controllers/laptop.controller.js')

route.get("/",controller.getList)

module.exports =route;