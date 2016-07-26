// @flow

export type CartItem<Extras> = {
  type: string,
  extras: Extras,
}


type CartItemExtras = {
  name: string
}

function typeToCartItem(type: string): CartItem<void> {
  return { type, extras: void 0 }
}

type SpecificCartItem = CartItem<CartItemExtras>

function typeToSpecificCartItem(type: string): SpecificCartItem {
  return typeToCartItem(type)
}
