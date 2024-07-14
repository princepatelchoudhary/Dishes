const Food = require("../models/food.js");

exports.update = async(req,res) => {
    try {
        const {id} = req.params;
        const {isPublished} = await Food.findOne({dishId:id})
        const food = await Food.findOneAndUpdate(
            {
                dishId : id,
            },
            {
                isPublished:!isPublished
            },
            {
                new:true
            }
        )

        res.status(200).json({
            success: true,
            data : food,
            message : "Update Successfully"
        })
    }
    catch(err) {
        res.status(500).json({            
            success: false,
            error: err.message,
            message: "Server error",
        })
    }
}