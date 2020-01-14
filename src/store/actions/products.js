import {
  GET_PRODUCTS,
  BASE_URL,
  TOGGLE_FAVORITE_PRODUCTS,
  FILTER_CATEGORIES_LAPTOPS,
  FILTER_CATEGORIES_PHONES,
  FILTER_CATEGORIES_WATCH,
  FILTER_CATEGORIES_ALL,
  PURCHASE_PRODUCT,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY
} from "../constants/constants";
import axios from "axios";

const setProducts = products => ({ type: GET_PRODUCTS, payload: products });

export const getProducts = () => {
  return dispatch => {
    axios
      .get(BASE_URL)
      .then(({ data }) => dispatch(setProducts(data)))
      .catch(error => {
        console.error(error);
      });
  };
};

export const setFavProducts = favProducts => {
  return {
    type: TOGGLE_FAVORITE_PRODUCTS,
    payload: favProducts
  };
};

export const setFilteredProductsAll = () => {
  return {
    type: FILTER_CATEGORIES_ALL
  };
};

export const setFilteredProductsWatch = () => {
  return {
    type: FILTER_CATEGORIES_WATCH
  };
};

export const setFilteredProductsPhones = () => {
  return {
    type: FILTER_CATEGORIES_PHONES
  };
};

export const setFilteredProductsLaptops = () => {
  return {
    type: FILTER_CATEGORIES_LAPTOPS
  };
};

export const purchaseProduct = product => {
  return {
    type: PURCHASE_PRODUCT,
    payload: product
  };
};

export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    payload: id
  };
};

export const subtractQuantity = id => {
  return {
    type: SUBTRACT_QUANTITY,
    payload: id
  };
};
