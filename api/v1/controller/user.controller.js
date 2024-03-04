const { UPDATEUSERSUCESSMSG, USERENTER, USERSHOW, USERDELETE } = require("../../config/constants");
const userservice=require("../service/user.service");
const bcrypt =require("bcrypt")

// async function createuserr(req,resp){
//     const {user_id,username,password}=req.body;
//     try{
//         const user=await userservice.createuser(user_id,username,password);
//             resp.status(201).json({
//             status_code:201,
//             data:user,
//             message:{SucessMessage:USERENTER}
//         });
        
//     }catch(error)
//         {
//         resp.status(500).json({
//             status_code:500,
//             data:{},
//             message:{erroeMessage:error.message}
//         })
//     }
// }


exports.createuserr=async(req,resp)=>{
    try{
        // const{user_id,username,password}=req.body;
        const saltrounds=10
        const user_id=req.body.user_id;
        const username=req.body.username
        const password=req.body.password;
        const encry= await bcrypt.hash(password,saltrounds)
        console.log(encry);
        const user=await userservice.createuser(user_id,username,encry);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:USERENTER}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.updateuserr=async(req,resp)=>{
    try{
        
        const user_id=req.body.user_id;
        const username=req.body.username
        const password=req.body.password;
        
        // console.log(password);
        const user=await userservice.updateuser(user_id,username,password);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:UPDATEUSERSUCESSMSG}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.getuserr=async(req,resp)=>{
    try{
      
        const user_id=req.params.user_id;
       
        const user=await userservice.getuser(user_id);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:USERSHOW}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.deleteuserr=async(req,resp)=>{
    try{
       
        const user_id=req.params.user_id;
   
        const user=await userservice.deleteuser(user_id);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:USERDELETE}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}
// module.exports={createuserr}
// module.exports={createuserr}