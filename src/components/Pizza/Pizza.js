import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import { addToCart, getCart } from "../../actions/cartActions";

class Pizza extends React.Component {

    addToCart() {
        const { pizza, addToCart, getCart, cart } = this.props;
        addToCart(pizza);
        // cart.push(pizza);
        let test = [pizza];
        console.log(cart);
        if(cart) {
            test = [...cart, pizza];
        }
        console.log(cart);
        localStorage.setItem("CART", JSON.stringify(test));
        console.log(localStorage.getItem("CART"));
    }

    render() {
        const { pizza } = this.props;
        const { id, name, price, image } = pizza;
        const style = {
            margin: 12,
        };
        return(
            <div className="pizza-wrapper">
                <div className="row">  
                    <div className="pizza-image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 pizza-name">{name}</div>
                    <div className="col-6 pizza-price">Price: {price} kr.</div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to={`pizzas/${id}`}>
                            <RaisedButton label="Mmm... what's this" primary={true} style={style} />
                        </Link>
                    </div>
                    <div className="col-6 text-center">
                        <RaisedButton label="Add to Cart" onClick={this.addToCart.bind(this)} primary={true} style={style} />
                    </div>                
                </div>
            </div>
        );
    }
};


Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string

    })
};

const mapStateToProps = ({ cart }) => {
    return { cart: cart }
}

export default connect(mapStateToProps, { addToCart, getCart } )(Pizza);