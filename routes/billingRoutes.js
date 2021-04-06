const { response } = require('express');
const Keys = require('../config/keys');
const stripe = require('stripe')(Keys.stripeSecretKey);


module.exports = (app) => {
    app.post('/api/stripe', async (req, res) => {
        if(!req.user) {
            return response.status(401).send({ error: 'You must log in!' });
        }

        const charge = await stripe.charges.create({
            amount: 25000,
            currency: "INR",
            description: "₹250 for 5 credits",
            source: req.body.id
        });
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};