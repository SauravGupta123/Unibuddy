const express = require("express");
const User = require("./models/userDb");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
var cors = require('cors');


//functions
//conversion to pascal case
function toPascalCase(str) {
    return str.replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
}

//mongoose connection check
mongoose.connect("mongodb://127.0.0.1:27017/students").then((data) => {
    console.log("connection open");
}).catch((err) => {
    console.log(err);
});


//middlewares
app.use(cors());
app.use(express.json());


//signup
    app.post("/signup", async (req, res) => {
    let { firstName, lastName, password, enrollmentNo, isAdmin } = req.body;
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
    let currBranch = enrollmentNo.slice(6, 9);
    let currBatch = enrollmentNo.slice(9, 11);
    let branch, batch;

    try {
        switch (currBranch) {
            case "032":
                branch = "CSE";
                break;
            case "015":
                branch = "IT";
                break;
            case "128":
                branch = "ECE";
                break;
            default:
                throw new Error('invalid branch code');
        }
    } catch (error) {
        res.send({ message: error.message });
        return;
    }
    try {
        switch (currBatch) {

            case "19":
                batch = 19;
                break;
            case "20":
                batch = 20;
                break;
            case "21":
                batch = 21;
                break;
            case "22":
                batch = 22;
                break;
            default:
                throw new Error('invalid batch code');
        }
    } catch (error) {
        res.send({ message: error.message });
        return;
    }

    const hashedPw = await bcrypt.hash(password, 5);
    const newUser = new User({
        firstName,
        lastName,
        enrollmentNo,
        password: hashedPw,
        isAdmin,
        branch,
        batch
    });
    newUser.save().then(data => {
        console.log("saved");
        res.send({ message: "Saved SuccessFully -indexedDB.js" });
    });

});



//login
app.post("/login", async (req, res) => {
    console.log(req.body);
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

app.post("/changePassword", async (req, res) => {
    const { currentPass, newPass, confirmPass, enrollmentNo } = req.body;

    const isUser = await User.findOne({ enrollmentNo });

    if (!isUser) {
        res.send({ message: "User not found" });
        return;
    }

    const isPassword = await bcrypt.compare(currentPass, isUser.password);
    if (isPassword) {
        const hashedNewPw = await bcrypt.hash(newPass, 5);
        isUser.password = hashedNewPw;
        await isUser.save();
        res.send({ message: "Password changed successfully" });
        console.log("changed successfully");
    } else {
        res.send({ message: "Incorrect current password" });
        console.log("Incorrect current password")
    }


    console.log(isPassword)
});

app.use((err, req, res, next) => {
    res.send(`An error occurred: ${err.message}`);
});

app.listen(3000, () => {
    console.log("MONGO server is running at port 3000");
});












