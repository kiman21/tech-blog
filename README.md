# tech-blog

##Description

The purpose of this project was to create a CMS-style blog website so users can post tech-related articles and blog posts as well as comment on the posts of others. This project utilizes express and handlebars as well as mysql for the database.

##Installation

The application should be deployed and ready to use! If you are cloning the repository, run `npm i` in the terminal to install the requires npm packages. Then run `mysql -uroot -ppassword` to access mysql. Enter `SOURCE db/schema.sql` to set up the database, then exit mysql. Run `npm run seed` to seed the database, then start the application with `npm start` or `node index.js`

##Usage

To use, after opening the homepage, click login and either sign in or sign up a new user with an email and password from the prompted window. Going to the homepage will display existing posts, click on one to read the full post and to comment. Going to the dashboard will display the user's existing posts and a button to create new posts. Click on an existing blog post in the dashboard to edit or delete it. To logout, click logout on the navbar.
[Deployed application](https://tech-blog-23.herokuapp.com/)
[Github deployment](https://kiman21.github.io/tech-blog/)

![Homepage](/assets/homepage.png)
![Login](/assets/login.png)
![Signup](/assets/signup.png)
![Dashboard](/assets/dashboard1.png)
![Edit Post](/assets/dashboard2.png)
![Comment](/assets/comment.png)
![Logout](/assets/logout.png)

##Credits
N/A

##License

MIT
