import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Job } from '@/types/Job';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const getSportTagColor = (sportType: string) => {
    const colors = {
      'Fitness Training': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      'Yoga': 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      'Swimming': 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
      'Pilates': 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
      'CrossFit': 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
      'Nutrition': 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
    };
    return colors[sportType as keyof typeof colors] || 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-sm dark:hover:shadow-gray-900/20 transition-all duration-200 group cursor-pointer"
      onClick={onClick}
    >
      {/* Header with company info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-black dark:bg-white rounded-full flex items-center justify-center">
              <span className="text-white dark:text-black text-xs font-medium">
                {job.company.charAt(0)}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-900 dark:text-white">{job.company}</span>
          </div>
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-[10px] font-medium">
            REMOTE
          </span>
        </div>

        {/* Sport type tag and REMOTE tag on same line */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getSportTagColor(job.sportType)}`}>
            {job.sportType}
          </span>
        </div>

        {/* Job title */}
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
          {job.title}
        </h2>

        {/* Job description */}
        <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4">
          {job.description}
        </p>

        {/* Job details */}
        <div className="space-y-1 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 dark:text-white text-xs font-medium">Location</span>
            <span className="text-gray-600 dark:text-gray-300 text-xs">{job.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 dark:text-white text-xs font-medium">Website</span>
            <span className="text-gray-600 dark:text-gray-300 text-xs">{job.company.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '.com'}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            <span>{formatDate(job.postedDate)}</span>
          </div>
          <ArrowRight className="w-3 h-3 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;