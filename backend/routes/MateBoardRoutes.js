const express = require('express');
const router = express.Router();

const MateBoardController = require('../controller/MateBoardController');
const MulterFileHandler = require("../middleware/MulterFileHandler");

const insertContentUpload = MulterFileHandler.MultiFileHandler("mateBoardImg");
const uploadInsertContentHandler = insertContentUpload.array("mateBoardPhotos")

router.post('/insertContent', uploadInsertContentHandler, MateBoardController.insertMateBoard);
router.post('/textEditorImgFileUpload',MateBoardController.textEditorImgFileUpload);
router.get('/findAllContent/:pageNumber', MateBoardController.findAllMateBoard);
router.get('/findByUser/:usersIndexNumber', MateBoardController.findByUsersIndexNumber);

router.post('/test', MateBoardController.test);

module.exports = router;
