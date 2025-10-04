import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginSuccess from "./LoginSuccess";
import { useUser } from "../../contexts/UserContext";

export default function LoginForm() {
  const { user, login } = useUser();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!username.trim()) {
      setError('Please enter your name');
      return;
    }
    if (username.trim().length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    login(username.trim());
    setUsername('');
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (user) {
    return <LoginSuccess user={user} />;
  }

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
      <div className="flex items-start gap-3">
        <span className="text-3xl">🔐</span>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-yellow-800 mb-2">
            Login Required
          </h3>
          <p className="text-yellow-700 mb-4">
            Please log in to start shopping and add items to your cart
          </p>
          <LoginInput 
            username={username}
            error={error}
            onChange={setUsername}
            onSubmit={handleSubmit}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}