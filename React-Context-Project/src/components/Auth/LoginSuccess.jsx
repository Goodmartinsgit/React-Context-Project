export default function LoginSuccess({ user }) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl">✅</span>
        <div>
          <p className="text-green-800 font-semibold">
            Welcome back, <span className="text-lg">{user.name}</span>!
          </p>
          <p className="text-green-600 text-sm">
            Logged in at {user.loggedInAt}
          </p>
        </div>
      </div>
    </div>
  );
}