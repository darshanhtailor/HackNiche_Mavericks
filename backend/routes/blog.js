const express = require("express")
const fetchuser = require("../middlewares/fetchUser");
const Blogs = require('../models/Blog');
const router = express.Router()

router.get('/', async(req, res)=>{
    try{
        const blogs = await Blogs.find();
        res.status(200).send(blogs);
    } catch(err){
        res.status(404).send({ message: err.message });
    }
});

router.post('/createblog', fetchuser, async(req, res)=>{
    try{
        const userId = req.user.id;
        const blog = {...req.body, creator: userId};
        
        newblog = await Blogs.create(blog);
        res.status(201).json(newblog);
    } catch(err){
        res.status(400).send({ message: err.message });
    }
});


module.exports = router;
