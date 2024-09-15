import { useNavigate } from '@tanstack/react-router';

export const Account = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-primary">You successfully logged in</h1>
                <button
                    onClick={() => navigate({ to: '/' })}
                    className="mt-4 bg-primary text-white p-2 rounded hover:bg-primary-dark transition duration-200"
                >
                    Return to Home Page
                </button>
            </div>
        </div>
    );
};