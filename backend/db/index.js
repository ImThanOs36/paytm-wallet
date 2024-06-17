const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://ThanOs:ThanOs36@cluster0.5i1i7is.mongodb.net/paytm-wallet", { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const TransactionsSchema = new mongoose.Schema({

  from: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  sender: {
    type: String,
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  receiver: {
    type: String,
    required: true
  },
  at: {
    type: Date,
    default: Date.now
  },
  transactions: {
    type: Number,
    required: true
  }

})

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);
const Transactions = mongoose.model("Transactions", TransactionsSchema);

module.exports = {
  User,
  Account,
  Transactions
};
