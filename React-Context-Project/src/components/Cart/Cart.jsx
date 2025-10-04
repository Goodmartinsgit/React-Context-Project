import { useCart } from "../../contexts/CartContext";
import EmptyCart  from "./EmptyCart";
import CartContent from "./CartContent";

export default function Cart() {
  const { isEmpty } = useCart();

  return (
    <div className="sticky top-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🛒</span>
        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
      </div>
      
      {isEmpty ? <EmptyCart/> : <CartContent/>}
    </div>
  );
}