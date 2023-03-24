const express = require('express');
const router = express.Router();
const { User, Blog, Comment } = require('../models');

router.get("/", (req,res)=>{
    Blog.findAll({
        include:[User,Comment]
    })
    .then(blogData=>{
        res.json(blogData)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
});

router.get("/:id", (req,res)=>{
    Blog.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            Comment
        ]
    })
    .then(blogData=>{
        console.log(blogData)
        res.json(blogData);
    })
    .catch(err=>{
       console.log(err);
       res.status(500).json({msg:"Error.",err})
    })
});

router.get("/getblog/:id", (req,res)=>{
    Blog.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            Comment
        ]
    })
    .then(blogData=>{
        console.log(blogData)
        res.json(blogData);
    })
    .catch(err=>{
       console.log(err);
       res.status(500).json({msg:"Error.",err})
    })
});

router.post("/", (req,res)=>{
    Blog.create({
        title: req.body.title,
        content: req.body.content,
        UserId: req.session.userId
    })
    .then(blogData=>{
    res.json(blogData);
    })
    .catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error.",err})
    })
});

router.put("/:id",(req,res)=>{
    Blog.update(
        {
            title: req.body.title,
            content: req.body.content
        },
        {
        where: {
            id: req.params.id
        },
    }
    )
    .then(blogData=>{
        if (blogData[0]) {
            return res.json(blogData);
        } else {
            return res.status(404).json({
                message: "No Record Found.",
        });
    }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
});

router.delete("/:id", (req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"Please login first."})
     }
     console.log(req.body);
     Blog.findByPk(req.params.id,{
        include:[User]
     }).then(blogData=>{
        if(!blogData){
           return res.status(404).json({msg:"No such post."})
        } else if (blogData.UserId!== req.session.userId){
           return res.status(403).json({msg:"Not your post!"})
        }
        Blog.destroy({
        where: {
            id:req.params.id,
        }
        })
        .then((blogData) => {
            res.json(blogData)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({msg:"Error.",err})
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error,",err})
    })
})

module.exports = router;