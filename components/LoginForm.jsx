import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    setMessage(data.message || data.error);

    if (response.ok) {
      onLogin(username);
    }
  };

  return (
    <div className="w-full h-screen bg-red-500 flex items-center justify-center">
      <form className='flex p-16 rounded bg-white gap-8 flex-col' onSubmit={handleSubmit}>
        <h1 className="text-5xl font-semibold">
          Notes📝
        </h1>
        <input
          className='p-4 rounded w-96 outline-none focus:outline-none bg-gray-200'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='p-4 rounded w-96 outline-none focus:outline-none bg-gray-200'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-green-500 py-4 rounded text-white' type="submit">Login/Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
