const { Router } = require('express')
const router = Router();
const authMiddleware = require('../middleware/authMiddleware');
const { Account, Transactions, User } = require('../db');
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;


router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
    console.log(req.userId)
})





router.get("/alltransaction", authMiddleware, async (req, res) => {
    try {
        // const { from } = req.body;
        const from = req.userId
        // Ensure 'from' is a valid ObjectId
        // if (!ObjectId.isValid(from)) {
        //     return res.status(400).json({ message: 'Invalid ID format' });
        // }

        const fromObjectId = new ObjectId(from);

        const transactions = await Transactions.find({
            $or: [
                { from: fromObjectId },
                { to: fromObjectId }
            ]
        });
        const userNames = await User.findOne({
            _id: from
        })



        res.json({ transactions, userNames });
        console.log(req.userId)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;
    console.log("in acc rout" + req.userId);


    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "jInsufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    const sender = await User.findOne({
        _id: req.userId
    });

    const receiver = await User.findOne({
        _id: to
    })


    const updateSender = await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    const updateReceiver = await Account.updateOne({ userId: to }, { $inc: { balance: +amount } }).session(session);
    if (updateSender && updateReceiver) {
        const newTransaction = await Transactions.create({
            from: req.userId, sender: sender.username, to: to,
            receiver: receiver.username, transactions: amount
        })
    } else {
        res.json({ message: "Transfer failed" });
    }
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});



module.exports = router