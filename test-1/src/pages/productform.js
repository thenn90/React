import React from 'react';
import StepOne from './stepone';
import { Form, SubmitField } from 'react-components-form';
import StepTwo from './steptwo';
import StepThree from './stepthree';
import StepFour from './stepfour';
import Button from './button';
import ImageButton from './imagebutton';
import PaypalImage from '../images/checkout-logo-medium.png';

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonType: 'creditcard',
            validForm: false
        }
    }

    handlePayment(paymentType) {
        this.setState({buttonType: paymentType});
    }

    handleSubmit() {
        return this.state.validForm ? false : true;
    }

    render(){
        return(
            <div className="col-md-6">
                <h2>Product Form</h2>
                <Form onSubmit={this.handleSubmit} >
                    <StepOne />
                    <StepTwo />
                    <StepThree paymentType={this.handlePayment.bind(this)} />
                    <StepFour />
                    {this.state.buttonType == 'creditcard' && (
                        <Button value="Place Order" validForm={this.state.validForm} />
                    )}
                    {this.state.buttonType == 'paypal' && (
                        <ImageButton imagesrc={PaypalImage} />
                    )}
                </Form>
            </div>
        )
    }
}

const Checkbox = props => (
    <label>
        <input type="checkbox" {...props} />
        <span>{props.label}</span>
    </label>
)

export default ProductForm;