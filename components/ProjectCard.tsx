import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onArchive: (websiteUrl: string) => void;
}

const ScoreBadge: React.FC<{ score: number }> = ({ score }) => {
    const getColor = () => {
        if (score >= 8) return 'bg-green-500/20 text-green-300 border-green-500/30';
        if (score >= 5) return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
        return 'bg-red-500/20 text-red-300 border-red-500/30';
    };

    return (
        <div className={`flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full border ${getColor()} font-bold text-2xl`}>
            {score}
        </div>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onArchive }) => {
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform duration-200 hover:transform hover:-translate-y-1 hover:border-sky-500/50">
            <div className="p-5 flex-grow">
                <div className="flex items-start gap-4">
                    <ScoreBadge score={project.Potansiyel_Skoru} />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-100 leading-tight">{project.Proje_Adı}</h3>
                        <p className="text-sm text-slate-400 mt-1">{project.Ham_Açıklama}</p>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-slate-900/50 rounded-md">
                     <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Analyst Note</p>
                    <p className="text-sm text-slate-300 italic mt-1">"{project.Analist_Notu}"</p>
                </div>
                <div className="mt-4 text-xs text-slate-400 space-y-2">
                    <div className="flex justify-between">
                        <span className="font-semibold">Source:</span>
                        <span>{project.Kaynak_Platform}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="font-semibold">Status:</span>
                        <span>{project.Lansman_Tarihi_Durumu}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Category:</span>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sky-900 text-sky-300">
                             {project.Kategori_Etiketler}
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-slate-800 border-t border-slate-700 flex items-center justify-between gap-2">
                 <a href={project.Website_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-sky-600/50 hover:bg-sky-600/80 text-white font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 text-sm">
                    Visit Site
                </a>
                <button 
                    onClick={() => onArchive(project.Website_URL)}
                    className="flex-1 text-center bg-slate-700/50 hover:bg-red-500/50 text-slate-300 hover:text-white font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 text-sm"
                    aria-label={`Archive ${project.Proje_Adı}`}
                >
                    Archive
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;