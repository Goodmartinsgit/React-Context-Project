export default function CartSummary({ totalPrice, onClearCart }) {
  return (
    <div className="border-t-2 border-gray-200 pt-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-gray-700">Total:</span>
        <span className="text-3xl font-bold text-green-600">${totalPrice.toFixed(2)}</span>
      </div>
      
      <div className="space-y-2">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition">
          💳 Checkout
        </button>
        <button
          onClick={onClearCart}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}