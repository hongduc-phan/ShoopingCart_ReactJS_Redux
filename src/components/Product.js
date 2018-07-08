import React, { Component } from 'react';
import Helpers from './../libs/Helpers';

class Product extends Component {
    render() {
        let {product} = this.props;
        console.log(product.name)
        return (
            <div className="media product">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src={`images/${product.image}`} alt={product.name} />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{product.name}</h4>
                    <p>{product.summary}</p>
                    {
                        this.showAreaBuy(product)
                    }
                </div>
            </div>
        );
    }

    showAreaBuy = (product) => {
        let xhtml  = null;
        let price = Helpers.toCurrency(product.price, 'EUR', 'right');

        if (product.canBuy) {
            xhtml =
                <div>
                    <input name="quantity-product-1" type="number" defaultValue={1} min={1} />
                    <a data-product={1} type="button" className="price"> {price} </a>
                </div>
        }
        else {
            xhtml = <span className="price"> {price} </span>
        }

        return xhtml;
    }
}

export default Product;
