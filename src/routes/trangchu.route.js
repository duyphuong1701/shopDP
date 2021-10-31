const express = require("express");
const route = express.Router();
const controller = require('../controllers/trangchu.controller.js')

route.get("/",controller.getIndex)

module.exports =route;