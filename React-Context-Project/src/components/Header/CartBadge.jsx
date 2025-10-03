 const CartBadge = ({ count }) => {
  return (
    <div className="relative">
      <div className="bg-blue-800 px-4 py-2 rounded-full font-semibold">
        🛒 Cart
      </div>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}

export default CartBadge;
