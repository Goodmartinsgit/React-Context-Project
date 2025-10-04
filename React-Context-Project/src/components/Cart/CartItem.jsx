import { useCart } from "../../contexts/CartContext";

function CartItem ({ item }) {
  const { removeItem, addItem, decreaseQuantity } = useCart();

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{item.emoji}</span>
          <p className="font-bold text-gray-800">{item.name}</p>
        </div>
        <p className="text-sm text-gray-600">
          ${item.price} × {item.quantity} = <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg font-bold"
        >
          −
        </button>
        <span className="w-8 text-center font-bold">{item.quantity}</span>
        <button
          onClick={() => addItem(item)}
          className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-lg font-bold"
        >
          +
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm ml-2"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

 export default CartItem;