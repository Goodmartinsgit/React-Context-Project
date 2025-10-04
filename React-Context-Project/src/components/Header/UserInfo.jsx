export default function UserInfo({ isAuthenticated, userName, onLogout }) {
  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2 text-blue-200">
        <span className="text-xl">👤</span>
        <span>Guest</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-blue-800 px-4 py-2 rounded-lg">
      <span className="text-xl">👤</span>
      <span className="font-semibold">{userName}</span>
      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition"
      >
        Logout
      </button>
    </div>
  );
}