
import React from 'react';

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    isLoading: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSearch, isLoading }) => {
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading) {
            onSearch();
        }
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={handleKeyPress}
                placeholder="e.g., Upcoming GameFi projects on Base ecosystem"
                className="flex-grow bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-lg p-4"
                disabled={isLoading}
            />
            <button
                onClick={onSearch}
                disabled={isLoading}
                className="flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-6 rounded-md shadow-lg transition-all duration-200 ease-in-out disabled:bg-slate-700 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Engaging Agent...
                    </>
                ) : (
                    'Deploy Agent'
                )}
            </button>
        </div>
    );
};

export default SearchInput;
