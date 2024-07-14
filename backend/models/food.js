const  mongoose =require('mongoose');
const foodSchema = new mongoose.Schema(
    {
        dishId:{
            type:String,
            required:true,
            unique: true,
        },
        dishName:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:String,
            required:true,
        },
        isPublished:{
            type:Boolean,
            required:true,
            default:true,
        }
    }
)
module.exports = mongoose.model('Food',foodSchema);