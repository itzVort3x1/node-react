import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render () {
        return (
            <StripeCheckout
                name="Emaily"
                description="₹250 for 5 email credits"
                amount={25000}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                currency="INR"
            >
                <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}

export default Payments;