import {
  GET_PRODUCTS,
  TOGGLE_FAVORITE_PRODUCTS,
  FILTER_CATEGORIES_LAPTOPS,
  FILTER_CATEGORIES_PHONES,
  FILTER_CATEGORIES_WATCH,
  FILTER_CATEGORIES_ALL,
  PURCHASE_PRODUCT,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY
} from "../constants/constants";

const initialState = {
  products: [],
  favProducts: [],
  filteredProducts: [],
  purchasingProducts: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      let updatedProducts = [...state.products];
      for (let key in action.payload) {
        updatedProducts.push(action.payload[key]);
      }
      return {
        ...state,
        products: updatedProducts,
        filteredProducts: updatedProducts
      };
    case TOGGLE_FAVORITE_PRODUCTS:
      if (!state.favProducts.includes(action.payload)) {
        return {
          ...state,
          favProducts: state.favProducts.concat(action.payload)
        };
      } else {
        let newFavProducts = [...state.favProducts];
        const index = newFavProducts.findIndex(item => item === action.payload);
        newFavProducts.splice(index, 1);
        return {
          ...state,
          favProducts: newFavProducts
        };
      }
    case FILTER_CATEGORIES_LAPTOPS:
      const newLaptops = [...state.products].filter(
        item => item.category === "laptops"
      );
      return {
        ...state,
        filteredProducts: newLaptops
      };
    case FILTER_CATEGORIES_ALL:
      const newArr = [...state.products];
      return {
        ...state,
        filteredProducts: newArr
      };
    case FILTER_CATEGORIES_PHONES:
      const newPhones = [...state.products].filter(
        item => item.category === "phones"
      );
      return {
        ...state,
        filteredProducts: newPhones
      };
    case FILTER_CATEGORIES_WATCH:
      const newWatch = [...state.products].filter(
        item => item.category === "watch"
      );
      return {
        ...state,
        filteredProducts: newWatch
      };
    case PURCHASE_PRODUCT:
      if (!state.purchasingProducts.includes(action.payload)) {
        return {
          ...state,
          purchasingProducts: state.purchasingProducts.concat(action.payload)
        };
      } else {
        let newPurchasingProducts = [...state.purchasingProducts];
        const index = newPurchasingProducts.findIndex(
          item => item === action.payload
        );
        newPurchasingProducts.splice(index, 1);
        return {
          ...state,
          purchasingProducts: newPurchasingProducts
        };
      }
    case ADD_QUANTITY:
      const newArray = [...state.purchasingProducts];
      const newElem = newArray.findIndex(item => item.id === action.payload);
      newArray[newElem].counter = newArray[newElem].counter + 1;
      return {
        ...state,
        purchasingProducts: newArray
      };
    case SUBTRACT_QUANTITY:
      const newAr = [...state.purchasingProducts];
      const newEl = newAr.findIndex(item => item.id === action.payload);
      if (newAr[newEl].counter > 1) {
        newAr[newEl].counter = newAr[newEl].counter - 1;
        return {
          ...state,
          purchasingProducts: newAr
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default products;
