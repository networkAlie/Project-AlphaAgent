
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Project AlphaAgent
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                An autonomous Web3 discovery agent designed to automate the "Scanning Day" phase of Alpha Hunting operations. Enter a strategic theme to begin.
            </p>
        </header>
    );
};

export default Header;
