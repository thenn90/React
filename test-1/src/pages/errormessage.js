import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import errorIcon from '../images/exclamation_triangle_solid_16x14.svg';

class ErrorMessage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="error"
                css={css`
                    color: rgb(215, 28, 42);
                    font-size: 12px;
                    line-height: 18px;
                    display: flex;
                    margin: 0px;
                    padding: 1rem 0px;
                `} 
            >
                <div css={css`padding-right: 10px`}><img className="exclamation-error" src={errorIcon} alt="exclamation-triangle" height="14px" width="16px" /></div>
                {this.props.message}
            </div>
        )
    }
}

export default ErrorMessage;