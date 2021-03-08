
const products = [
    {
        id: 1,
        name: "Sledgehammer",
        price: 125.75 
    },
    {
        id: 2, 
        name: "Axe", 
        price: 190.50 
    },
    {
        id: 3, 
        name: "Bandsaw", 
        price: 562.13 
    },
    {
        id: 4,
        name: "Chisel", 
        price: 12.9 
    }, 
    {
        id: 5,
        name: "Hacksaw", 
        price: 18.45 
    }
  ]

  export const getProduct = (state, id) =>
  state[id]

 
  function ProductsReducer(state = products, action){
    switch(action.type) {
      default:
          return state ;
    }
}
export default ProductsReducer;