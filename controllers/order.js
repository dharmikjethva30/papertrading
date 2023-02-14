const order = require("../models/order")
const fetch_data = require("../utils/fetch-data")
const charge = require("../utils/charges")
const { Model } = require("mongoose")

const buy_order = async (req, res) => {
    try {
        const { order_id, symbol, quantity } = req.body

        const buy_price = await fetch_data(symbol)

        const total_taxes = await charge(1, buy_price, quantity)

        const amount_delta = 0

        const new_order = new order({
            order_id,
            symbol,
            quantity,
            buy_price,
            amount_delta,
            total_taxes
        })
        await new_order.save()
        res.status(200).json({
            message: "Order Placed Successfully",
            order_id
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const sell_order = async (req, res) => {
    try {
        const {order_id, symbol, quantity} = req.body
        const curr_order = await order.findOne({order_id : order_id})
        const sell_price = await fetch_data(symbol)

        const taxes = await charge(0, sell_price, quantity)
        const total_taxes = curr_order.total_taxes + taxes
        const amount_delta = (sell_price - curr_order.buy_price) * quantity - total_taxes
        await order.findOneAndUpdate(order_id, {
            sell_price: sell_price,
            amount_delta: amount_delta,
            total_taxes: total_taxes
        })
        res.status(200).json({
            message: "Order Placed Successfully",
            order_id
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const current_order = async (req, res) => {
    try {
        const curr_order = await order.find({ order_id: req.body.order_id })
        res.status(200).json({
            curr_order
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    buy_order,
    sell_order,
    current_order
}
