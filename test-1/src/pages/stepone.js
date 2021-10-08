import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Title from './title';
import RadioField from './radiofield';

class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: [],
            selectedProduct: false
        };
    }
    componentDidMount() {
        const headers = { 'Content-Type': 'application/json' }
         fetch('https://www.wsjwine.com/api/offer/ACAP010', { headers })
        .then(response => response.json())
        .then(data => this.setState({ productsList: data.response.mainItems, selectedProduct: data.response.mainItems[0].product.name }));
    }
    handleChange = event => {
        this.setState({ selectedProduct: event.target.value })
    };
    render(){
        return(
            <div>
                <Title heading="STEP 1:" subheading="Which Case Would You Like?" />
                <p
                    css={css`
                        font-size: 14px;
                        padding: 0 0 12px 0;
                        margin: 0;
                    `} 
                >The complete package—worth $263.96—is yours for ONLY $69.99 (plus $19.99 shipping & applicable tax).</p>
                <div>
                    {this.state.productsList.map((item, index) => (
                        <RadioField 
                            key= {index}
                            type="radio"
                            id={item.product.itemCode} 
                            name="productName" 
                            value={item.product.name}
                            defaultChecked = {this.state.selectedProduct === item.product.name}
                            onChange={this.handleChange}
                            label={<Fragment>
                                    <span css={css`font-weight:800;`}>
                                        <span>{item.product.name}</span>
                                        <span> {item.product.skus[0].numberOfBottles}</span>
                                        <span> ${item.listPrice}</span>
                                    </span>
                                </Fragment>}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default StepOne;