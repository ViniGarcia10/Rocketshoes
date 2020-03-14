export function addToCart(product) {
  return {
    type: '@card/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@card/REMOVE',
    id,
  };
}
