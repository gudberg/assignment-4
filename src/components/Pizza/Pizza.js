import React from 'react';
import { PropTypes } from 'prop-types';
// import { Pizza } from '../Pizza/Pizza'

const Pizza = ({ pizza }) => {
    const { name, description, price, image } = pizza;
    return(
            <div className="pizza-wrapper">
                <div className="pizza-image"></div>
                    <img src={image} alt="" />
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
            </div>

    );
};


Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string

    })
};

export default Pizza;