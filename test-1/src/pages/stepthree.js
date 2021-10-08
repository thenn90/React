import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import RadioField from './radiofield';
import TextField from './textfield';
import Checkbox from './checkboxfield';
import Title from './title';

class StepThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: false,
            showCard: true,
            showPaypal: false
        };
    }

    handlebuttons(paymentType){
        paymentType == 'creditcard' ? this.setState({showCard:true,showPaypal:false}) : this.setState({showCard:false,showPaypal:true});
        this.props.paymentType(paymentType)
    }
    
    render(){
        return(
            <div>
                <Title heading="STEP 3:" subheading="How Would You Like To Pay?" />
                <div css={css`margin-bottom: 20px;`}>
                    <RadioField name="paymenttype" buttonId="choiceOne" value="creditcard" label="Credit Card" defaultChecked="true" sendData={this.handlebuttons.bind(this)} />
                    <RadioField name="paymenttype" buttonId="choiceTwo" value="paypal" label="Paypal" sendData={this.handlebuttons.bind(this)} />
                </div>
                { this.state.showCard && (
                    <div css={css`display:flex;-webkit-box-pack: justify;justify-content: space-between;margin-bottom:20px;`}>
                        <div css={css`width:40%`}><TextField name="cardnumber" label="Credit Card Number" isrequired="Please enter a valid credit card number." /></div>
                        <div css={css`width:30%`}><TextField name="expdate" label="Exp. Date (MM/YY)" isrequired="Please enter your credit card's expiration date." /></div>
                        <div css={css`max-width:110px`}><TextField name="cvv" label="CVV" isrequired="Please enter your credit card's CVV." islength="Please make sure that your CVV number is 3 or 4 digits" /></div>
                    </div>
                )}
                { this.state.showPaypal && (
                    <div
                        css={css`
                            padding-bottom: 20px;
                        `}
                    >You will be directed to sign into your PayPal account when you review your order.</div>
                )}
                <Checkbox name="billingAddress" label="Billing address is the same as shipping address" defaultChecked="true" />
                <Checkbox name="saveDetails" label="Save my details and create an online account." />
            </div>
        )
    }
}

export default StepThree;