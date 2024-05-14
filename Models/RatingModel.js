import mongoose from "mongoose";

const RatingSchema = mongoose.Schema({
       
        name : {
            type: String,
            required: true,
        },
        designation : {
            type: String,
            required: true,
        },
        description : {
            type: String,
            required: true,
        },
        rating : {
            type: Number,
            required: true,
        }
    }, 
    {
        timestamps : true
    },
    {
        typeKey: '$type'
    }
)

export const RatingMod = mongoose.model('rating', RatingSchema)