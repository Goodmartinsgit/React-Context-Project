import { useCart } from "../../contexts/CartContext";
import CartItems  from "./CartItems";
import  CartSummary from "./CartSummary";

export default function CartContent() {
  const { items, totalPrice, clearCart } = useCart();

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
      <CartItems items={items} />
      <CartSummary totalPrice={totalPrice} onClearCart={clearCart} />
    </div>
  );
}