import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import ErrorMessage from './errormessage';

class TextField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hideplaceholder: '',
            isError: false,
            errormessage: ''
        }
    }

    onFocus = () => {
            this.setState({focus: true})
    }
    onBlur= (event) => {
        event.target.value.length > 0 ? this.setState({focus: true}) : this.setState({focus: false});
        this.validation(event.target.value)
    }
    getClass= () => {
        if(this.state.focus === true)
            return "hide-placeholder";
        else
            return "";
    }
    onChange = (event) => {
        const value = event.target.value;
        if(event.target.name === 'zip') {
            this.props.handleZip(value);
        }
        this.validation(value);
    }

    validation(value) {
        if (this.props.isrequired) {
            if (value.length <= 0){
                this.setState({isError: true, errormessage: this.props.isrequired});
                return;
            } else {
                 this.setState({isError: false, errormessage: ''});
            }
        }

        if(this.props.islength) {
            if(value.length < this.props.islength[0]) {
                this.setState({isError: true, errormessage: this.props.islength[1]});
                return;
            } else {
                 this.setState({isError: false, errormessage: ''});
            }
        }

        if (this.props.isemail) {
            const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            emailValid ? this.setState({isError: false, errormessage: ''}) : this.setState({isError: true, errormessage: this.props.isemail});
        }
    }


    render(){
        var inputClass = this.getClass();
        return(
            <div css={css`margin-bottom: 20px;`}>
                <div  
                    css={css`
                        .hide-placeholder {
                            label {
                                transform: translate(0px, -14px) scale(0.75);
                                padding-left: 14px;
                                padding-bottom: 15px;
                                width: 100%;
                            }
                        }
                    `}
                >
                    <div className = {inputClass}
                        css={css`
                            position: relative;
                            width: 100%;
                            bottom-border: 1px solid #000;
                        `}
                    >
                        <label className="label"
                            css={css`
                                position: absolute;
                                font-size: 15px;
                                text-align: left;
                                color: rgba(0, 0, 0, 0.7);
                                pointer-events: none;
                                padding-left: 10px;
                                padding-bottom: 8px;
                                margin: 0px;
                                bottom: 5px;
                                letter-spacing: 0px;
                                line-height: 24px;
                                transform: translate(0px, 0px) scale(1);
                                transform-origin: left top;
                                transition: all 0.1s ease-in-out 0s;
                            `}
                        >{this.props.label}</label>
                        <input
                            css={css`
                                background-color: rgb(245, 245, 245);
                                border-width: 0px 0px 1px;
                                border-color: rgb(0, 0, 0);
                                font-size: 15px;
                                padding: 26px 0px 7px 10px;
                                width: 100%;
                                border-radius: 0px;
                                letter-spacing: 0px;
                                line-height: 24px;
                                box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
                                -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
                                transition: border linear .2s,box-shadow linear .2s;
                                color: #555;
                                vertical-align: middle;
                                &:focus {
                                    outline: none;
                                }
                            `}
                            type = {this.props.type}
                            autoComplete = {this.props.autoComplete}
                            name = {this.props.name}
                            onFocus={this.onFocus.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                </div>
                {this.state.isError && (
                    <ErrorMessage message={this.state.errormessage} />
                )}
            </div>
        )
    }
}

export default TextField;