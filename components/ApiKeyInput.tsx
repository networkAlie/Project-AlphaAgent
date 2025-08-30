import React, { useState, useEffect } from 'react';

interface ApiKeyInputProps {
    apiKey: string;
    onApiKeyChange: (key: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ apiKey, onApiKeyChange }) => {
    const [localApiKey, setLocalApiKey] = useState(apiKey);
    const [isSaved, setIsSaved] = useState(!!apiKey);
    const [showKey, setShowKey] = useState(false);

    useEffect(() => {
        setLocalApiKey(apiKey);
        setIsSaved(!!apiKey);
    }, [apiKey]);

    const handleSave = () => {
        onApiKeyChange(localApiKey);
        setIsSaved(true);
    };

    const handleEdit = () => {
        setIsSaved(false);
    }
    
    if (isSaved) {
        return (
            <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg flex justify-between items-center">
                <p className="text-green-400 font-medium">Gemini API Key is saved.</p>
                <button 
                    onClick={handleEdit}
                    className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200"
                >
                    Edit Key
                </button>
            </div>
        )
    }

    return (
        <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <label htmlFor="api-key-input" className="block text-sm font-medium text-slate-300 mb-2">
                Enter Your Google Gemini API Key
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                    <input
                        id="api-key-input"
                        type={showKey ? 'text' : 'password'}
                        value={localApiKey}
                        onChange={(e) => setLocalApiKey(e.target.value)}
                        placeholder="Paste your API key here"
                        className="w-full bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 p-3 pr-10"
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowKey(!showKey)} 
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-200"
                        aria-label={showKey ? "Hide API key" : "Show API key"}
                    >
                        {showKey ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.303 3.552A1 1 0 013.717 2.14l14.142 14.142a1 1 0 01-1.414 1.414l-1.473-1.473a10.011 10.011 0 01-4.512 1.473c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 013.454-5.223l-2.09-2.091z" />
                            </svg>
                        )}
                    </button>
                </div>
                <button
                    onClick={handleSave}
                    disabled={!localApiKey.trim()}
                    className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-200 ease-in-out disabled:bg-slate-700 disabled:cursor-not-allowed"
                >
                    Save Key
                </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
                Your API key is stored only in your browser's local storage and is never sent to our servers. Get your key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Google AI Studio</a>.
            </p>
        </div>
    );
};

export default ApiKeyInput;