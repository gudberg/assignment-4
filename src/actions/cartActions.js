import { FILL_CART, CART, ADD_TO_CART, GET_CART } from "../constants/cartConstants";

export const fillCart = () => {
    return {
        type: FILL_CART,
        payload: JSON.parse(localStorage.getItem(CART))
    }
}

export const addToCart = (item) => {
    const cool = tmp(item)
    return {
        type: ADD_TO_CART,
        payload: cool
    }
}

export const getCart = () => {
    return {
        type : GET_CART,
        payload: ""
    }
}

const tmp = (pizza) => {
    const { name, description, price} = pizza;
    return {
        name: name,
        description: description,
        price: price
    };
}