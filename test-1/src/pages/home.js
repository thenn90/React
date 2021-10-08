import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Form from './productform';

class Home extends React.Component {
    render(){
        return(
            <div className="container"
                css={css`
                    font-family: open-sans,sans-serif;
                `}
            >
                <Form />
            </div>
        )
    }
}

export default Home;