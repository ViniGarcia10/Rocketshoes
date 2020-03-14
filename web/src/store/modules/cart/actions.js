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

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
