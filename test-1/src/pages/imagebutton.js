import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

class ImageButton extends React.Component {
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
                        border: none;
                        background-color: transparent;
                        height: 34px;
                        padding: 0px;
                        transition: all 0.3s ease 0s;
                        cursor: pointer;
                        margin: 0px;
                        outline: none;
                        &:disabled {
                            color: rgb(255, 255, 255);
                            background-color: transparent;
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
                    {this.props.imagesrc &&(
                        <img src={this.props.imagesrc} alt={this.props.imagealt} />
                    )}
                </button>
            </div>
        )
    }
}

export default ImageButton;