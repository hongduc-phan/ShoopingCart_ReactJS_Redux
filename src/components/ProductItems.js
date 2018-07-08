import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as configs from './../constant/Config';
import Product from "./Product";
import ProductItemNoSale from "./ProductItemNoSale";

class ListItems extends Component {
    render() {
        let {products} = this.props;
        console.log(products)
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading"><h1 className="panel-title">List Products</h1></div>
                    <div className="panel-body" id="list-product">
                        { this.showElementProduct(products)}
                    </div>
                </div>
            </div>
        );
    }

    showElementProduct = (products) => {
        let xhtml = <b>{configs.NOTI_EMPTY_PRODUCT}</b>
        if (products.length > 0) {
            xhtml = products.map((product, index) => {
               return ( <Product key={index} product={product} index = {index}/>
               );
            });
        }
        return (xhtml);
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps,null)(ListItems);
