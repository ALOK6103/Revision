import * as types from "./actionTypes";

const initialstate = {
  products: [],
 
  isError: false,
  isLoading: false,
};



const reducer = (oldState = initialstate,action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REQ_DATA:
      return { ...oldState };
    case types.GET_DATA:
      return { ...oldState, products: payload };
    case types.ERR_DATA:
      return { ...oldState, isError: true };

    
   
    default: {
      return oldState;
    }
  }
};

export { reducer };
