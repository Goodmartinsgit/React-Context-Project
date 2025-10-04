export default function EmptyCart() {
  return (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
      <span className="text-6xl mb-4 block">🛒</span>
      <p className="text-gray-600 font-semibold">Your cart is empty</p>
      <p className="text-gray-500 text-sm mt-2">Add some products to get started!</p>
    </div>
  );
}