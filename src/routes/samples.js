// ************ Require's ************
const express = require('express');
const router = express.Router();
let multer = require('multer');
let path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

// ************ Controller Require ************
const samplesController = require('../controllers/samplesController');

router.get('/', samplesController.root); /* GET - All products */
router.get('/detail/:sampleId/', samplesController.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', samplesController.create); /* GET - Form to create */
router.post('/create/', samplesController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:sampleId', samplesController.edit); /* GET - Form to create */
router.put('/edit/:sampleId', samplesController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:sampleId', samplesController.destroy); /* DELETE - Delete from DB */

module.exports = router;
