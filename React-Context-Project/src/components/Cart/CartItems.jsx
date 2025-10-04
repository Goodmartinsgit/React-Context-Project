import CartItem from "./CartItem";

export default function CartItems ({ items }) {
  return (
    <div className="space-y-4 mb-6">
      {items.map(item => (
        <CartItem key={item.id} item={item}/>
      ))}
    </div>
  );
}

