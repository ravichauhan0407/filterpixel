const router=require('express').Router()
const  getImagesController=require('../controllers/GetImagesController')


router.get('/get-drive-images',getImagesController.getImagesFromDrive)






module.exports=router