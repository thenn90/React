import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div
                css={css`
                    display: inline-block;
                    margin: 20px 0;
                    position: relative;
                    clear: both;
                    padding: 3px 0 1px 0px;
                    border-bottom: 1px solid #999;
                `}
            >
                <h2
                    css={css`
                        color: #999;
                        font-size: 18.5px;
                        font-weight: 700;
                        margin: 0;
                        display: inline-block;
                        letter-spacing: .8px;
                        font-family: open-sans-condensed,sans-serif;    
                    `}
                >{this.props.heading}</h2>
                <p
                    css={css`
                        display: inline-block;
                        margin:0;
                        padding-left: 5px;
                        font-size: 18.5px;
                        font-weight: 200;
                        color: #000;
                        line-height: 1.5rem;
                        text-transform: capitalize;
                        font-family: open-sans-condensed,sans-serif;
                    `}
                >{this.props.subheading}</p>
            </div>
        )
    }
}

export default Title;