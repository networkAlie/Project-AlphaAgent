import React, { useState, useCallback, useEffect } from 'react';
import { Project } from './types';
import { runAlphaAgent } from './services/geminiService';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import LoadingIndicator from './components/LoadingIndicator';
import ResultsDisplay from './components/ResultsDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import ApiKeyInput from './components/ApiKeyInput';

const App: React.FC = () => {
    const [apiKey, setApiKey] = useState<string>('');
    const [themeQuery, setThemeQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<Project[]>([]);
    const [archivedProjects, setArchivedProjects] = useState<Set<string>>(new Set());
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedApiKey = localStorage.getItem('geminiApiKey');
        if (savedApiKey) {
            setApiKey(savedApiKey);
        }
        const savedArchived = localStorage.getItem('archivedProjects');
        if (savedArchived) {
            setArchivedProjects(new Set(JSON.parse(savedArchived)));
        }
    }, []);

    const handleApiKeyChange = (newKey: string) => {
        setApiKey(newKey);
        localStorage.setItem('geminiApiKey', newKey);
    };

    const archiveProject = (websiteUrl: string) => {
        const newArchived = new Set(archivedProjects);
        newArchived.add(websiteUrl);
        setArchivedProjects(newArchived);
        localStorage.setItem('archivedProjects', JSON.stringify(Array.from(newArchived)));
    };

    const handleSearch = useCallback(async () => {
        if (!apiKey) {
            setError("Please save your Gemini API key first.");
            return;
        }
        if (!themeQuery.trim()) {
            setError("Please enter a research theme.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setResults([]);

        try {
            const agentResults = await runAlphaAgent(themeQuery, apiKey);
            setResults(agentResults);
        } catch (e: unknown) {
            console.error(e);
            if (e instanceof Error) {
                setError(`An error occurred: ${e.message}. Please check the console for details.`);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }, [themeQuery, apiKey]);
    
    const visibleResults = results.filter(p => !archivedProjects.has(p.Website_URL));

    return (
        <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <main className="mt-8">
                    <ApiKeyInput apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
                    
                    {apiKey && (
                        <div className="mt-6">
                            <SearchInput
                                value={themeQuery}
                                onChange={(e) => setThemeQuery(e.target.value)}
                                onSearch={handleSearch}
                                isLoading={isLoading}
                            />
                        </div>
                    )}
                    
                    {error && <ErrorDisplay message={error} />}
                    
                    {isLoading && <LoadingIndicator />}
                    
                    {!isLoading && results.length > 0 && (
                        <ResultsDisplay 
                            projects={visibleResults} 
                            onArchiveProject={archiveProject}
                            totalCount={results.length}
                        />
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;