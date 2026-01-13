const express = require("express");


const router = express.Router();

const zod = require("zod");
const JWT_SECRET = require("../config");
const { User } = require("./db");
const jwt = require("jsonwebtoken");


const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

router.post("/signup" , async (req, res) =>{
    const body = req.body;

    const { success } = signupBody.safeParse(req.body);

    if(!success){
       return res.status(411).json({
        message: "Email already taken / Incorrect inputs"
       })
    }

    const user = User.findOne({
        username: body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "email already taken "
        })
    }

    const dbUser = await User.create(body);
     
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        massage: "user created successfully",
        token: token
    })

})


const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post("/signin", async(req, res) => {
    const { success } = signinBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message: "email already taken / incorrect inputs"
        })
    }

    const user = await user.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "error while handing in"
    })

})

module.exports = router;