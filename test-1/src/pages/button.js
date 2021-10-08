import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div
                css={css`
                    margin-bottom: 50px;
                `}
            >
                <button 
                    css={css`
                        border: 1px solid rgb(215, 24, 42);
                        color: rgb(255, 255, 255);
                        background-color: rgb(215, 24, 42);
                        border-radius: 0px;
                        font-size: 20px;
                        height: 34px;
                        padding: 0px 60px;
                        letter-spacing: 0px;
                        transition: all 0.3s ease 0s;
                        cursor: pointer;
                        text-decoration: none;
                        white-space: nowrap;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.25;
                        margin: 0px;
                        outline: none;
                        font-family: open-sans, sans-serif !important;
                        text-transform: capitalize !important;
                        &:disabled {
                            color: rgb(255, 255, 255);
                            background-color: rgb(157, 157, 157);
                            border-color: transparent;
                            box-shadow: none;
                            cursor: not-allowed;
                            pointer-events: none;
                        }
                    `}
                    type="submit"
                    name="productForm"
                    disabled={!this.props.validForm}
                >
                    {this.props.value}
                </button>
            </div>
        )
    }
}

export default Button;