const Mongoose=require("mongoose")
let schema=Mongoose.Schema(


    {
        friendName:String,
        friendNickname:String,
        describeyourFriend:String,
        contactNo:String,
        emailId:String

    }



    )

    let friendModel=Mongoose.model("friends",schema)
    module.exports=friendModel

