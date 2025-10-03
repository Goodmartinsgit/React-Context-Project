import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(undefined);

function cartReducer(state, action) {
  // ... reducer logic
}

export function CartProvider({ children }) {
  // ... provider logic
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}