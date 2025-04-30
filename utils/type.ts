export type actionFunction = (
  prevState: ActionState | null,
  formData: FormData
) => Promise<ActionState>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type DeleteProductState = {
  productId: string;
};

export type ActionState = {
  message: string;
};
