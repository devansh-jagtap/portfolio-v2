import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

interface LiveWorkProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
  handleProjectClick: (project: Project) => void;
}

// Client websites that are live in production
const liveWork = PROJECTS.filter(p => p.category === 'Client Work' && p.demoUrl);

const LiveWork: React.FC<LiveWorkProps> = ({
  borderClass,
  mutedText,
  isDark,
  handleProjectClick
}) => {
  return (
    <div className="grid grid-cols-1">
      <div className={`p-6 border-b ${borderClass} flex justify-between items-center`}>
        <h3 className="font-serif italic text-2xl">Live Work</h3>
        <span className={`flex items-center gap-2 text-xs ${mutedText}`}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          In production
        </span>
      </div>
      {liveWork.map((project) => (
        <div
          key={project.slug}
          onClick={() => handleProjectClick(project)}
          className={`group p-6 md:p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer`}
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-3xl font-serif group-hover:text-purple-500 transition-colors">{project.title}</h4>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-600 dark:text-purple-400 hover:underline mb-4"
          >
            <Globe className="w-3.5 h-3.5" />
            {new URL(project.demoUrl!).hostname}
          </a>
          <p className={`${mutedText} text-sm mb-6`}>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((t) => (
              <span key={t} className={`text-[10px] uppercase tracking-wider px-2 py-1 border ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveWork;
