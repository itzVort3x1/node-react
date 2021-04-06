import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render () {
        return (
            <StripeCheckout
                name="Emaily"
                description="₹250 for 5 email credits"
                amount={25000}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                currency="INR"
            >
                <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);