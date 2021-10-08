import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Title from './title';
import Checkbox from './checkboxfield';

class StepFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: false
        };
    }
    render(){
        return(
            <div>
                <Title heading="STEP 4:" subheading="Complete Your Order" />
                <Checkbox name="saveDetails" label={<Fragment>I have read and agree to the <a href='#' >Terms &amp; Conditions</a> and <a href='#'>Privacy Policy</a>.</Fragment>} />    
                <Checkbox name="saveDetails" label = {
                    <Fragment>
                        <p>My first wine club case will be delivered for 
                            today’s special introductory price. I’ll receive a new 
                            <span id='wp-bottle-amount'>12-bottle selection</span> every 
                            <span id='wp-delivery-period'>3 months</span><span id='wp-case-eligible-copy'>, 
                            and will soon be eligible for </span><span id='wp-seasonal-cases'>2 extra-special 
                            seasonal cases</span>, each only <span id='wp-price'>$159.99</span>, 
                            <span id='wp-plus-copy'>plus $19.99 shipping &amp; tax</span>.
                            I will get a reminder before the above payment method is automatically charged – 
                            and will always have at least 10 days’ notice to skip, change or delay selections 
                            (online or by phone). I can also cancel my membership anytime at 
                            <span id='wp-phone'>1-877-975-9463</span> or by emailing <span id='wp-email'>
                            <a href='mailto:customerservice@wsjwine.com'></a>
                            </span><a href='mailto:customerservice@wsjwine.com'>
                            <span id='wp-customer-service-copy'>customer service</span></a>.</p>
                    </Fragment>} 
                /> 
            </div>
        )
    }
}

export default StepFour;