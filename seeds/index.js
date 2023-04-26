const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            email:"andrew@andrew.com",
            password:"password"
        },
        {
            email:"andrew@andrew.com",
            password:"secret"
        }
    ],{
        individualHooks:true
    })

    const blogs = await Blog.bulkCreate([
        {
            title:"Test Blog Post",
            content:"testing testing 123",
            UserId:1
        },
        {
            title:"Another Test Blog Post",
            content:"more testing testin 123",
            UserId:2
        }
    ])
    process.exit(1)
}

seed();