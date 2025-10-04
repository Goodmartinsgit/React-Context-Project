import ProductCard from './ProductCard';
import { PRODUCTS } from '../../data/products';

export default function ProductList() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📚</span>
        <h2 className="text-2xl font-bold text-gray-800">Available Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}