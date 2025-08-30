import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ResultsDisplayProps {
    projects: Project[];
    onArchiveProject: (websiteUrl: string) => void;
    totalCount: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ projects, onArchiveProject, totalCount }) => {
    
    const downloadCSV = () => {
        const headers: (keyof Project)[] = ["Proje_Adı", "Website_URL", "Kaynak_Platform", "Kategori_Etiketler", "Lansman_Tarihi_Durumu", "Ham_Açıklama", "Potansiyel_Skoru", "Analist_Notu"];
        const csvRows = [
            headers.join(','),
            ...projects.map(p => {
                const values = headers.map(header => {
                    const val = p[header];
                    const escaped = ('' + val).replace(/"/g, '""');
                    return `"${escaped}"`;
                });
                return values.join(',');
            })
        ];
        
        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        const today = new Date().toISOString().slice(0, 10);
        link.setAttribute('download', `${today}_ham_veri.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const archivedCount = totalCount - projects.length;

    return (
        <div className="mt-8">
            <div className="p-4 sm:p-6 bg-slate-800/50 border border-slate-700 rounded-t-lg flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold text-white">Agent Findings ({projects.length} / {totalCount})</h3>
                    {archivedCount > 0 && (
                         <p className="text-sm text-slate-400">{archivedCount} project{archivedCount > 1 ? 's' : ''} archived.</p>
                    )}
                </div>
                <button
                    onClick={downloadCSV}
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download CSV
                </button>
            </div>
            {projects.length === 0 && totalCount > 0 ? (
                 <div className="p-6 bg-slate-800/20 border-x border-b border-slate-700 rounded-b-lg text-center">
                    <p className="text-slate-400">All projects found have been archived.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={`${project.Website_URL}-${index}`} project={project} onArchive={onArchiveProject} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResultsDisplay;