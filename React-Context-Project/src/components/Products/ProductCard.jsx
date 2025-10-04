import { useCart } from '../../contexts/CartContext';
import { useUser } from '../../contexts/UserContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { isAuthenticated } = useUser();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all hover:border-blue-300">
      <div className="flex items-start justify-between mb-3">
        <span className="text-4xl">{product.emoji}</span>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
          {product.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-3xl text-blue-600 font-bold mb-4">${product.price}</p>
      
      <button
        onClick={handleAddToCart}
        disabled={!isAuthenticated}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isAuthenticated
            ? 'bg-green-600 hover:bg-green-700 text-white hover:scale-105'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isAuthenticated ? '🛒 Add to Cart' : '🔒 Login Required'}
      </button>
    </div>
  );
}