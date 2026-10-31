import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OPEN_SOURCE_CONTRIBUTIONS } from '../../constants';

interface OpenSourceContributionsProps {
  borderClass: string;
  mutedText: string;
  isDark: boolean;
}

const OpenSourceContributions: React.FC<OpenSourceContributionsProps> = ({
  borderClass,
  mutedText,
  isDark
}) => {
  return (
    <div className={`border-b ${borderClass}`}>
      <div className="p-6 md:p-8">
        <h3 className="font-serif italic text-2xl mb-3">Open Source Contributions</h3>
        <p className={`text-sm leading-relaxed ${mutedText} max-w-prose`}>
          I contribute to open-source projects across developer tooling, authentication, and language learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {OPEN_SOURCE_CONTRIBUTIONS.map((contribution, index) => (
          <a
            key={contribution.name}
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 border-t ${borderClass} ${index < 2 ? `md:border-r ${borderClass}` : ''} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50`}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h4 className="font-serif text-xl group-hover:text-purple-500 transition-colors">
                  {contribution.name}
                </h4>
                <p className={`text-xs mt-1 ${mutedText}`}>{contribution.handle}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className={`text-sm leading-relaxed ${mutedText}`}>{contribution.description}</p>
            <span className={`inline-block mt-5 text-[10px] uppercase tracking-wider px-2 py-1 border ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
              Open source
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OpenSourceContributions;
