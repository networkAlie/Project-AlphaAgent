
import React, { useState, useEffect } from 'react';

const loadingSteps = [
    "Analyzing strategic theme...",
    "Querying sources for potential leads...",
    "Scanning data aggregators and launchpads...",
    "Synthesizing intelligence from multiple vectors...",
    "Filtering signal from noise...",
    "Compiling final project manifest...",
];

const LoadingIndicator: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % loadingSteps.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-8 p-6 bg-slate-800/50 border border-slate-700 rounded-lg text-center flex flex-col items-center">
             <div className="w-16 h-16 border-4 border-sky-500 border-dashed rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-semibold text-slate-200">Agent is working...</h3>
            <p className="text-slate-400 mt-2 transition-opacity duration-500 ease-in-out">
                {loadingSteps[currentStep]}
            </p>
        </div>
    );
};

export default LoadingIndicator;
