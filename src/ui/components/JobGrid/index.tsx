import React from 'react';
import JobCard from '@/ui/components/JobCard';
import { Job } from '@/types/Job';
import { Briefcase } from 'lucide-react';

interface JobGridProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
}

const JobGrid: React.FC<JobGridProps> = ({ jobs, onJobClick }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Briefcase className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No jobs found</h3>
        <p className="text-gray-600 dark:text-gray-300">Try adjusting your search criteria to find more opportunities.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {jobs.length} job opportunities waiting
        </p>
        <div className="flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-400">
          <span>Find Your Dream Job in Fitness, Sports, and Wellness Development...</span>
          <button className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 underline">Read more</button>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 border border-gray-300 dark:border-gray-600 flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500"></div>
            </div>
            <div className="w-4 h-4 border border-gray-300 dark:border-gray-600 flex items-center justify-center">
              <div className="w-2 h-0.5 bg-gray-400 dark:bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
        ))}
      </div>
    </div>
  );
};

export default JobGrid;