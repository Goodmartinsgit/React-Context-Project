import { useUser } from "../../contexts/UserContext";
import { useCart } from "../../contexts/CartContext";
import CartBadge from "./CartBadge";
import UserInfo from "./UserInfo";

export default function Header() {
  const { user, logout, isAuthenticated } = useUser();
  const { totalItems } = useCart();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🛍️</span>
          <h1 className="text-2xl font-bold">Context Shop</h1>
        </div>

        <div className="flex items-center gap-4">
          <CartBadge count={totalItems} />
          <UserInfo
            isAuthenticated={isAuthenticated}
            userName={user?.name}
            onLogout={logout}
          />
        </div>
      </div>
    </header>
  );
}
