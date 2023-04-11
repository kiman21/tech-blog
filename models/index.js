const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

Blog.belongsTo(User,{
    onDelete: "CASCADE",
    foreignKey: "UserId"
    
})
User.hasMany(Blog)

Comment.belongsTo(User,{
    onDelete: "CASCADE",
    foreignKey: "UserId"
});
User.hasMany(Comment)

Comment.belongsTo(Blog, {
    onDelete: "CASCADE",
    foreignKey: "WeblogId"
});
Blog.hasMany(Comment)

module.exports = {
    User,
    Blog,
    Comment
}