import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export class RadioField extends React.Component {
    constructor(props) {
        super(props)
    }
    handlepaymentType(event) {
        if (event.target.checked) {
            this.props.sendData(event.target.value)
        }
    }
    render(){
        return(
            <label htmlFor={this.props.buttonId}
                css={css`
                    -webkit-box-align: center;
                    align-items: center;
                    padding-bottom:12px;
                    &:first-of-type {
                        padding-right: 40px;
                    }
                `} 
            >
                <input 
                    css={css`
                        position: absolute;
                        opacity: 0;
                        height: 0px;
                        width: 0px;
                        &:checked {
                            & ~ .checkmark-border .checkmark-background {
                                -webkit-box-align: center;
                                align-items: center;
                                -webkit-box-pack: center;
                                justify-content: center;
                                display: flex;
                                position: relative;
                                border-radius: 50%;
                                width: 15px;
                                height: 15px;
                                background-color: rgb(0, 0, 0);
                            }
                            &  ~ .checkmark-border .checkmark-background .checkmark-check {
                                width: 0px;
                                height: 0px;
                                border: 0px none;
                                transform: rotate(45deg);
                            }
                        }
                    `}
                    type="radio" 
                    id={this.props.buttonId}
                    name={this.props.name} 
                    value={this.props.value}
                    defaultChecked = {this.props.defaultChecked}
                    onChange={this.handlepaymentType.bind(this)}
                />
                <span className="checkmark-border"
                    css={css`
                        -webkit-box-align: center;
                        align-items: center;
                        -webkit-box-pack: center;
                        justify-content: center;
                        display: flex;
                        position: absolute;
                        align-self: flex-start;
                        cursor: pointer;
                        height: 21px;
                        width: 21px;
                        margin-top:4px;
                        border: 1px solid rgb(0, 0, 0);
                        border-radius: 50%;
                    `}
                >
                    <span className="checkmark-background">
                        <span className="checkmark-check"></span>
                    </span>
                </span>
                <span
                    css={css`
                        margin: 0px 0px 0px 5px;
                        padding-left: 36px;
                        padding-bottom: 12px;
                        font-size: 14px;
                        letter-spacing: 0px;
                        line-height: 24px;
                        font-family: open-sans, sans-serif;
                    `}
                >{this.props.label}</span>
            </label>
        )
    }
}

export default RadioField;
