import React, { useEffect, useState } from 'react';
import ContributionGraph, { ContributionCalendar } from './ContributionGraph';

const GitHubGraph: React.FC = () => {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.details || data.error || `HTTP ${res.status}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data && !data.error && data.weeks) {
          setCalendar(data);
        } else {
          console.error("Invalid data format:", data);
          setError("Invalid GitHub contribution data returned by the server.");
        }
        setLoading(false); 
      })
      .catch((err) => {
        const message = err instanceof Error ? err.message : "Failed to load GitHub data.";
        setError(message);
        if (!message.toLowerCase().includes("token rejected") && !message.toLowerCase().includes("not configured")) {
          console.error("Failed to load GitHub data:", err);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="animate-pulse h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg w-full"></div>;
  }

  if (error) {
    return (
      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">{error}</p>
        <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
          If the token is expired, regenerate GITHUB_TOKEN and restart the dev server.
        </p>
      </div>
    );
  }

  if (!calendar || !calendar.weeks) {
    return (
      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          Unable to load GitHub contribution data. Check console for details.
        </p>
        <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
          Ensure GITHUB_TOKEN is configured in your environment.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto pb-2">
      <ContributionGraph calendar={calendar} />
    </div>
  );
};

export default GitHubGraph;