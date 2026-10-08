import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import { BlogPost } from '../../types';

interface LatestWritingProps {
  borderClass: string;
  mutedText: string;
  handleBlogClick: (blog: BlogPost) => void;
  handleNav: (view: 'blog') => void;
}

const LatestWriting: React.FC<LatestWritingProps> = ({
  borderClass,
  mutedText,
  handleBlogClick,
  handleNav
}) => {
  // BLOG_POSTS is ordered newest first
  const latestPosts = BLOG_POSTS.slice(0, 2);

  return (
    <div className="grid grid-cols-1">
      <div className={`p-6 border-b ${borderClass}`}>
        <h3 className="font-serif italic text-2xl">Latest Writing</h3>
      </div>
      {latestPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => handleBlogClick(post)}
          className={`group p-6 md:p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer`}
        >
          <div className={`flex justify-between items-center mb-3 text-xs font-mono uppercase tracking-widest ${mutedText}`}>
            <span>{post.date} · {post.readTime} read</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-current">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
          <h4 className="text-2xl font-serif italic mb-2 group-hover:text-purple-500 transition-colors">{post.title}</h4>
          <p className={`${mutedText} text-sm`}>{post.excerpt}</p>
        </div>
      ))}
      {/* Full Blog Card */}
      <button
        onClick={() => handleNav('blog')}
        className={`w-full group p-6 md:p-8 border-b ${borderClass} transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 flex items-center justify-between text-left`}
      >
        <div>
          <h4 className="text-xl font-serif italic mb-1">Read the Blog</h4>
          <p className={`text-sm ${mutedText}`}>All {BLOG_POSTS.length} essays on code and craft</p>
        </div>
        <div className="p-3 rounded-full transition-opacity">
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  );
};

export default LatestWriting;
