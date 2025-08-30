
import React from 'react';

interface ErrorDisplayProps {
    message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
    return (
        <div className="mt-8 p-4 bg-red-900/50 border border-red-700 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-200">An Error Occurred</h3>
            <p className="text-red-300 mt-1">{message}</p>
        </div>
    );
};

export default ErrorDisplay;
