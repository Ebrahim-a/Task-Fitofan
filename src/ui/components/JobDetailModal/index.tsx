import React, { useState } from 'react';
import { X, Clock, MapPin, DollarSign, Briefcase, TrendingUp, CheckCircle, Building2 } from 'lucide-react';
import { Job } from '@/types/Job.ts';
import ApplicationModal from '@/ui/components/ApplicationModal';

interface JobDetailModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, isOpen, onClose }) => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  if (!isOpen || !job) return null;

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

  const getExperienceBadgeColor = (experience: string) => {
    switch (experience) {
      case 'Entry-level':
        return 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'Mid-level':
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Senior':
        return 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  const getJobTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Part-time':
        return 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'Contract':
        return 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
      case 'Freelance':
        return 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800';
      default:
        return 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  const handleApplyClick = () => {
    setIsApplicationModalOpen(true);
  };

  const handleApplicationModalClose = () => {
    setIsApplicationModalOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black text-sm font-medium">
                  {job.company.charAt(0)}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Tags and basic info */}
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSportTagColor(job.sportType)}`}>
                {job.sportType}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getJobTypeBadgeColor(job.type)}`}>
                {job.type}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getExperienceBadgeColor(job.experience)}`}>
                {job.experience}
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                REMOTE
              </span>
            </div>

            {/* Job details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Salary</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.salary}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Job Type</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.type}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Experience</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.experience}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Website</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.company.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '.com'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Posted</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{formatDate(job.postedDate)}</p>
                </div>
              </div>
            </div>

            {/* Job description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About this role</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Requirements</h3>
              <div className="space-y-2">
                {job.requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleApplyClick}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Apply for this position
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        job={job}
        isOpen={isApplicationModalOpen}
        onClose={handleApplicationModalClose}
      />
    </>
  );
};

export default JobDetailModal;