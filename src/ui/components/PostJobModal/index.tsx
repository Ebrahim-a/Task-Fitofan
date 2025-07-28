import React, { useState } from 'react';
import { X, Building2, MapPin, DollarSign, FileText, Users, Clock, Activity } from 'lucide-react';

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostJobModal: React.FC<PostJobModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    experience: 'Mid-level',
    description: '',
    requirements: '',
    sportType: 'Fitness Training'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Job posted:', formData);
    onClose();
    // Reset form
    setFormData({
      title: '',
      company: '',
      location: '',
      salary: '',
      type: 'Full-time',
      experience: 'Mid-level',
      description: '',
      requirements: '',
      sportType: 'Fitness Training'
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Post a New Job</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Find the perfect candidate for your fitness team</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Job Title *
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="e.g., Senior Fitness Trainer"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Company & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Company Name *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder="Your fitness center name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="City, State"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Sport Type & Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Sport Type *
              </label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <select
                  required
                  value={formData.sportType}
                  onChange={(e) => handleChange('sportType', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="Fitness Training">Fitness Training</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Pilates">Pilates</option>
                  <option value="CrossFit">CrossFit</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Boxing">Boxing</option>
                  <option value="Dance">Dance</option>
                  <option value="Martial Arts">Martial Arts</option>
                  <option value="Running">Running</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Job Type *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <select
                  required
                  value={formData.type}
                  onChange={(e) => handleChange('type', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Salary & Experience Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Salary Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => handleChange('salary', e.target.value)}
                  placeholder="e.g., $40,000 - $60,000"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Experience Level *
              </label>
              <select
                required
                value={formData.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="Entry-level">Entry-level</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Job Description *
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Describe the role, responsibilities, and what makes your team special..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Requirements & Qualifications
            </label>
            <textarea
              rows={3}
              value={formData.requirements}
              onChange={(e) => handleChange('requirements', e.target.value)}
              placeholder="List the key requirements, certifications, and qualifications (one per line)"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobModal;