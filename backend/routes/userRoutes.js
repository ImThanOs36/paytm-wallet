const { Router } = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = Router();
const { User, Account } = require("../db")
const jwt = require('jsonwebtoken')
const zod = require('zod')
const JWT_SECRET = "HEYPX"
const authSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})
const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
})



router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || " ";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })
    

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

router.post("/signup", async (req, res) => {
    const { success } = authSchema.safeParse(req.body)

    if (!success) {
        res.json({ msg: "error in inputs" })
    }

    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;


    const existUser = await User.findOne({ username: username })
    if (existUser) {
        res.json({ msg: "user exist" })
    }
    const user = await User.create({
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
    })
    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })


    const token = jwt.sign({ userId }, JWT_SECRET)
    user.save()
    res.json({ user: user, token: token })
})
router.post("/signin", authMiddleware, async (req, res) => {
    const { success } = signinSchema.safeParse(req.body)

    if (!success) {
        res.status(411).json({ msg: "invalid inputs" })
    }
    const user = await User.findOne({
        username: req.body.username,
    })
    if (user) {

        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return
    }
    res.status(411).json({ msg: "user does not exist" })
})

module.exports = router