const { Router } = require('express')
const router = Router();
const authMiddleware = require('../middleware/authMiddleware');
const { Account, User } = require('../db');
const mongoose = require('mongoose')
 


router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
    console.log(req.userId)  
})



router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction(); 
    const { amount, to} = req.body;
    console.log("in acc rout"+req.userId);


    const account = await Account.findOne({ userId:req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }


    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: +amount } }).session(session);
    //userId:req.userID userId:to amount

    await session.commitTransaction(); 

    res.json({
        message: "Transfer successful"
    });
});



module.exports = router