const express = require("express");
const User = require("./models/userDb");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
var cors = require('cors')

app.use(cors())

//functions
//conversion to pascal case
function toPascalCase(str) {
    return str.replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
}

mongoose.connect("mongodb://127.0.0.1:27017/authDemo").then((data) => {
    console.log("connection open");
}).catch((err) => {
    console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json())
app.use(express.urlencoded())



app.post("/signup", async (req, res) => {
    let { firstName, lastName, password, enrollmentNo } = req.body;
    firstName = toPascalCase(firstName);
    lastName = toPascalCase(lastName);

    //laymen way to check but for now its ok
    const findEnroll = await User.find({ enrollmentNo });
    if (findEnroll.length != 0) {
        res.send({ message: "duplicate enrollmentNo-idx.js" });
        return;
    }

    //if user enters an number in input feild
    if (!isNaN(firstName) || !isNaN(lastName)) {
        res.send({ message: "Name cannot be a number-idx.js" });
        return;
    }

    const hashedPw = await bcrypt.hash(password, 5);
    const newUser = new User({
        firstName,
        lastName,
        enrollmentNo,
        password: hashedPw,
    });
    newUser.save().then(data => {
        console.log("saved");
        console.log(newUser);
        res.send({ message: "Saved SuccessFully -indexedDB.js" });
    });

});



//login
app.post("/login", async (req, res) => {
    const { enrollmentNo, password } = req.body;
    const isUser = await User.findOne({ enrollmentNo: enrollmentNo });

    //if user not found
    if (!isUser) {
        res.send({ message: "user not found" })
        return;
    }

    const isPassword = await bcrypt.compare(password, isUser.password);
    if (isPassword) {
        res.send({ message: "logged in successfully", user: isUser })
        console.log("👍");
    } else {
        res.send({ message: "invalid username or password" });
    }
});

app.listen(3000, () => {
    console.log("server is running at port 3000");
});












