let cart = {};

const getCart = () => cart;

const addProductToCart = (productId, quantity) => {
  if (!cart[productId]) {
    cart[productId] = { quantity, ...products[productId] };
  } else {
    cart[productId].quantity += quantity;
  }
};

const removeProductFromCart = (productId) => {
  delete cart[productId];
};

export { getCart, addProductToCart, removeProductFromCart };