const mongoose = require('mongoose')

const transaction_schema = mongoose.Schema({
    status:{
        type: Boolean
    },
    buy_time:{
        type: Date
    },
    buy_price:{
        type: Number
    },
    sell_time:{
        type: Date
    },
    sell_price:{
        type: Number
    },
    symbol:{
        type: String
    },
    quantity:{
        type: Number
    },
    profit_loss: {
        type: Number
    },
    new_balance:{
        type: Number
    }
})

module.exports = mongoose.model("transaction", transaction_schema)

