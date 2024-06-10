const route=require("express").Router()
const {getmess,addedMessages}=require("../controllers/messageController")
route.get('/getm/:senderid/:reciverid',getmess)
route.post('/postMsg/:senderId/:reciverId',addedMessages)
module.exports=route