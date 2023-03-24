const express = require('express');
const router = express.Router();
const { User, Blog, Comment } = require("../models");

router.get("/",(req,res)=>{
  Blog.findAll({
      include:[User, Comment]
  }).then(blogData=>{
      console.log(blogData)
      const hbsWeblogs = blogData.map(blog=>blog.toJSON())
      console.log(hbsBlogs)
      res.render("home",{
          allBlogs:hbsBlogs
      })
  })
})

router.get("/login",(req,res)=>{
  if(req.session.userId){
    res.redirect("/dashboard")
  } else {
    res.render("login")
  }
})

router.get("/signup",(req,res)=>{
  res.render("signup")
})

router.get("/dashboard", (req,res) => {
  if (!req.session.userId) {
    return res.redirect("/login")
  }
  User.findByPk(req.session.userId,{
    include: [Blog]
  })
  .then(userData=>{
    console.log(userData)
    const userHbs = userData.toJSON();
    console.log(userHbs)
    res.render("dashboard", userHbs)
  })
})


router.get("/viewblog/:blogId", (req,res) => {
  const { blogId } = req.params;
  Blog.findByPk(blogId, {
      include:[
        {
          model: User,
          attributes: ['id', 'username']
        },
        {
          model: Comment,
          include: [User]
        },
      ],
  })
  .then(blogCommentData=>{
      console.log(blogCommentData)
      console.log(blogCommentData.toJSON());
      res.render('viewblog', {
        blogCommentData: blogCommentData.toJSON(),
      })
    }).catch(err=>{
      console.group(err);
      res.status(500).json({msg:"Error.", err})
  })
});

module.exports = router;