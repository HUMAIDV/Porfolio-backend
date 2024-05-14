import express, { response } from 'express';
import { RatingMod } from '../Models/RatingModel.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const router = express.Router();

router.post('/', async (request,response) => {
    
    try {
        if (
            !request.body.name ||
            !request.body.designation ||
            !request.body.description ||
            !request.body.rating
        ) {
            return response.status(201).send({
                message: "Send all required fields: name, designation, description",
            });
        }
        console.log(request.body.name)
        console.log(request.body.rating)
        const newRating = {
            name: request.body.name,
            designation: request.body.designation,
            description: request.body.description,
            rating: request.body.rating,
        }
        const rating = await RatingMod.create(newRating);
        return response.status(200).send(rating)

    } catch (error) {
        console.log(error.message);        
        response.status(500).send({message: error.message})
    }
})

router.get('/', async (req,res) => {

    try {
        const ratings = await RatingMod.find({})
                        .sort({createdAt: -1});
                        
        return res.status(200).json({
            count: ratings.length,
            data: ratings

        })
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})     

export default router;