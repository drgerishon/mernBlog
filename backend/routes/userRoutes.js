const router = require("express").Router();
const User = require("../models/User");

//user creation 

router.post('/', async (req, res) =>{
    const {email, password} = req.body;

    try{
        const user = await User.create({email, password});
        await user.generateAuthToken();
        res.status(201).json(user);
    }catch(e){
        let msg;
        if(error.code == 1100){
            msg = 'email already exists'
        }else{
            msg = error.message;
        }
            res.status(400).json(msg);
        }
})

//login a user
router.post('/login', async (req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findByCredentials(email, password);
        await user.generateAuthToken();
        res.json(user)
    }catch(e){
        res.status(400).json(e.message)
    }
})

module.exports = router;
