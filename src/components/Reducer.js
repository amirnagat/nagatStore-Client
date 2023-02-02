export const Reducer = (cart = [],action)=>{
   
  if (action.type === "ADD") {
        // let tempcart = cart.filter((product) => product.id === action.payload.id);
        // if (tempcart < 1) {
          // console.log(cart);
          return [...cart, action.payload];
        // } else {
        //   return cart;
        // }
      }
      if (action.type === "REMOVE") {
        const id = action.payload._id;
        let data = [...cart];
        const index = data.findIndex((product) => product._id === id);
        console.log(index);
        if (index >= 0 ) {
           data.splice(index,1)
        }
        return [...data];

      }

      if (action.type === "INCREASE") {
        let tempcart = cart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        return tempcart;
      }
      if (action.type === "DECREASE") {
        let tempcart = cart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        return tempcart;
      }
      return cart;
}