import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

class Checkbox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div
                    css={css`
                        margin-bottom: 30px;
                        display: flex;
                        -webkit-box-pack: start;
                        justify-content: flex-start;
                    `}
                >
                <label
                    css={css`
                        padding: 4px 10px 0px 0px;
                        user-select: none;
                        font-family: open-sans, sans-serif;
                        color: rgb(51, 51, 51);
                    `} 
                >
                    <input 
                        css={css`
                            position: absolute;
                            opacity: 0;
                            cursor: pointer;
                            height: 0px;
                            width: 0px;
                            &:checked {
                                & ~ .checkmark-border .checkmark-background{
                                    -webkit-box-align: center;
                                    align-items: center;
                                    -webkit-box-pack: center;
                                    justify-content: center;
                                    display: flex;
                                    position: relative;
                                    width: 18px;
                                    height: 18px;
                                    background-color: rgb(255, 255, 255);
                                }
                                & ~ .checkmark-border .checkmark-background .checkmark-check {
                                    width: 4px;
                                    height: 12px;
                                    border-style: solid;
                                    border-color: rgb(0, 0, 0);
                                    border-image: initial;
                                    border-width: 0px 1.5px 1.5px 0px;
                                    transform: rotate(45deg);
                                }
                                
                            }
                        `}
                        type="checkbox" 
                        defaultChecked = {this.props.defaultChecked}
                        {...this.props} 
                    />
                    <span className="checkmark-border"
                        css={css`
                            -webkit-box-align: center;
                            align-items: center;
                            -webkit-box-pack: center;
                            justify-content: center;
                            display: flex;
                            position: relative;
                            cursor: pointer;
                            height: 18px;
                            width: 18px;
                            border: 1px solid rgb(204, 204, 204);
                        `}
                    >
                        <span className="checkmark-background">
                            <span className="checkmark-check"></span>
                        </span>
                    </span>
                </label>
                <span
                    css={css`
                        align-self: center;
                    `}
                >
                    {this.props.label}
                </span>
            </div>
        )
    }
}

export default Checkbox;