const User = require("../models/User");


exports.getProfile = async(req,res)=>{

    try{


        const user = await User.findById(req.user.id)
        .select("-password");


        res.status(200).json({

            message:"Profile fetched successfully",

            user

        });


    }catch(error){


        res.status(500).json({

            message:"Server error",
            error:error.message

        });


    }

};