var express = require('express');
var router = express.Router();

var controller = require('../controller/about.controller')

router.get('/', controller.index);
router.get('/my-info', controller.info);

router.get('/change-pass', controller.changepwd);
router.get('/exe-done', controller.exedone);

module.exports = router;