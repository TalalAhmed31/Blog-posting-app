const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "TalalLearningBackendDevelopment";

mongoose.set("strictQuery", false);

const uri = "mongodb://localhost:27017";
mongoose.connect(uri, { dbName: "SocialDB" });

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});
const Post = mongoose.model("Post", {
  userId: mongoose.Schema.Types.ObjectId,
  text: String,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Insert your authenticateJWT Function code here.

function aunthenticationJWT(req, res, next) {
  const token = req.session.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try{
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch(error){
    return res.status(401).json({message: 'Invalid Token'})
  }
}

// Insert your requireAuth Function code here.

// Insert your routing HTML code here.

// Insert your user registration code here.

// Insert your user login code here.

// Insert your post creation code here.

// Insert your post updation code here.

// Insert your post deletion code here.

// Insert your user logout code here.

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
