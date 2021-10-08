import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import TextField from './textfield';
import Checkbox from './checkboxfield';
import Title from './title';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextTooltip from './texttooltip';

class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            stateCode: '',
            stateCreateMsg: '',
            showCity: false
        };
    }

    handlezip(zipcode) {
        console.log(zipcode);
        this.setState({ 
            city: '', 
            stateName: '',
            stateCode: '', 
            stateCreateMsg: '',
            showCity: false });
        if (zipcode.length < 5) {
            return;
        }

        const headers = { 'Content-Type': 'application/json' }
        fetch('https://www.wsjwine.com/api/address/zipcode/'+zipcode, { headers })
         .then(response => response.json())
         .then(data => this.setState({ 
            showCity: true,
            city: data.response.city, 
            stateName: data.response.stateName,
            stateCode: data.response.stateCode, 
            stateCreateMsg: data.response.stateCode == 'NY' ? data.response.stateCreateMsg: '' })
            )
    }

    render(){
        return(
            <div>
                <Title heading="STEP 2:" subheading="Where Would You Like Your Wine Delivered?" />
                <div className="row">
                    <TextField name="email" label="Email" autoComplete="off" type="text" isrequired="Looks like we don't have an email address for you; please enter one now." isemail="Sorry, we couldn't validate your email address; please re-enter." />
                </div>
                <div className="row">
                    <TextField name="confirmEmail" autoComplete="off" label="Confirm Email" type="text" isrequired="Looks like we don't have an email address for you; please enter one now." isemail="Please confirm your email address." />
                </div>
                <Checkbox name="checkbox" label="Yes, I would like to receive exclusive offers on your latest wine discoveries" />
                <div className="row">
                    <div className="col">
                        <TextField name="firstname" autoComplete="off" label="First Name" type="text" isrequired="Please enter your first name" />
                    </div>
                    <div className="col">
                        <TextField name="lastname" autoComplete="off" label="Last Name" type="text" isrequired="Please enter your last name." />
                    </div>
                </div>
                <div className="row">
                    <TextField name="companyname" autoComplete="off" label="Company Name (optional)" type="text" />
                </div>
                <div className="row">
                    <div className="col">
                        <TextField name="address" autoComplete="off" label="Address" type="text" />
                    </div>
                    <div className="col">
                        <TextField name="apt" autoComplete="off" label="Apt, Suite, etc. (optional)" type="text" />
                    </div>
                </div>
                <div>
                    <div css={css`display:flex;-webkit-box-pack: justify;justify-content: space-between;`}>
                        <div css={css`width:30%;margin-right:1rem;`}><TextField name="zip" label="ZIP" type="text" autoComplete="off" handleZip={this.handlezip.bind(this)} islength={["5", "Please make sure that your zip code is 5 numbers"]} isrequired="Looks like we don't have your ZIP code; please enter it now." /></div>
                        { this.state.showCity && (
                            <div
                                css={css`
                                    align-self: flex-end;
                                    width: 50%;
                                    position: relative;
                                    bottom: 14px;
                                    margin-bottom:20px;
                                `}
                            >
                                <div>{this.state.city}, {this.state.stateCode}</div>
                            </div>
                         )}
                        <div css={css`visibility: hidden;height: 0rem;width: 0rem;margin: 0rem;`}><TextField name="city" label="city" value={this.state.city} type="text" /></div>
                        <div css={css`visibility: hidden;height: 0rem;width: 0rem;margin: 0rem;`}><TextField name="stateCode" label="stateCode" value={this.state.stateCode} type="text" /></div>
                        <div css={css`visibility: hidden;height: 0rem;width: 0rem;margin: 0rem;`}><TextField name="state" label="state" value={this.state.stateName} type="text" /></div>
                    </div>
                    { this.state.showCity && this.state.stateCreateMsg.length > 0 && (
                        <div
                            css={css`
                                color: rgb(0, 0, 0);
                                padding: 10px;
                                margin: 0px;
                                font-size: 0.9rem;
                                text-shadow: none;
                                background-color: rgb(255, 255, 255);
                                border: 1px solid rgba(153, 153, 153, 0.2);
                                border-radius: 0px;
                                transition: opacity 0.5s ease 0s;
                                opacity: 1;
                                line-height: 20px;
                                margin-bottom: 20px;
                            `}
                        >
                            {this.state.stateCreateMsg}
                        </div>
                    )}
                </div>
                
                <div className="row">
                    <div className="col"><TextField name="phone" label="Phone" autoComplete="off" type="text" isrequired="Please enter your phone number." /></div>
                    <div className="col">
                        <TextField name="dob" label="Date Of Birth (MM/DD/YYYY)" autoComplete="off" type="text" isrequired="Looks like we don't have your date of birth; please enter it now." />
                        <TextTooltip data-text="By entering your date of birth, you confirm that you are at least 21 years of age, and old enough to purchase wine." />
                    </div>
                </div>
            </div>
        )
    }
}

export default StepTwo;