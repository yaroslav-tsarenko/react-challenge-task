import { useNavigate } from '@tanstack/react-router';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <button
                onClick={() => navigate({ to: '/login' })}
                className="bg-primary text-white p-2 rounded hover:bg-primary-dark transition duration-200"
            >
                Login into Account
            </button>
        </div>
    );
};