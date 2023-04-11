const express = require('express');
const router = express.Router();
const { User, Blog, Comment } = require('../models');
const bcrypt = require("bcrypt");

router.get("/", (req,res) => {
    User.findAll()
    .then(userData=> {
        console.log(userData)
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
});
   
router.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/login")
});
   
router.get("/:id", (req,res) => {
    User.findByPk(req.params.id,{
        include:[Blog]
    })
    .then(userData=>{
        console.log(userData)
        res.json(userData)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
});
   
router.post("/", (req,res) => {
    console.log(req.body);
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(userData=>{
        req.session.userId = userData.id;
        req.session.email = userData.email;
        res.json(userData)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
})

router.post("/login", (req,res) => {
    User.findOne({
        where:{
            username: req.body.email,
        }
    })
    .then(userData=>{
        if(!userData){
            res.status(401).json({msg:"Incorrect user information."})
        } else {
            if(bcrypt.compareSync(req.body.password, userData.password)) {
                req.session.userId = userData.id;
                req.session.email = userData.email;
                return res.json(userData);
            } else {
                res.status(401).json({msg:"Incorrect user information."})
            }
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
});
   
module.exports = router;