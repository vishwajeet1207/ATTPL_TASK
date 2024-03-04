const express=require('express')
const router=express.Router();
const usercontroller=require("../controller/user.controller")

router.post("/",usercontroller.createuserr);
router.post("/updateuser",usercontroller.updateuserr)
router.post("/getuser/:user_id",usercontroller.getuserr)
router.post("/deleteuser/:user_id",usercontroller.deleteuserr)

module.exports=router;