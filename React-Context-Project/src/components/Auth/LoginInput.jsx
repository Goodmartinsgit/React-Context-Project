export default function LoginInput({ username, error, onChange, onSubmit, onKeyPress }) {
  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Enter your name"
          className="flex-1 px-4 py-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500"
        />
        <button
          onClick={onSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold transition"
        >
          Login
        </button>
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-2 font-semibold">⚠️ {error}</p>
      )}
    </div>
  );
}