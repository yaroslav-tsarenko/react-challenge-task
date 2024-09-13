import { useState } from 'react';
import { useAuth } from '../../shared/hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';


export const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
        navigate({ to: '/account' });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <form onSubmit={handleSubmit} className="bg-grey p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-primary">Login</h2>
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-black mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white p-2 rounded hover:bg-primary-dark transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};