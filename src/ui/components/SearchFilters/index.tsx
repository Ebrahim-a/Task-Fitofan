import React from 'react';
import { Search, MapPin, Briefcase, TrendingUp } from 'lucide-react';
import { FilterState } from '@/types/FilterState';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (field: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-3 h-3" />
          <input
            type="text"
            placeholder="Job title or company"
            value={filters.search}
            onChange={(e) => handleInputChange('search', e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors text-xs"
          />
        </div>

        {/* Location Filter */}
        <div className="relative">
          <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-3 h-3" />
          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors text-xs"
          />
        </div>

        {/* Job Type Filter */}
        <div className="relative">
          <Briefcase className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-3 h-3" />
          <select
            value={filters.jobType}
            onChange={(e) => handleInputChange('jobType', e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors text-xs appearance-none cursor-pointer"
          >
            <option value="">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        {/* Experience Filter */}
        <div className="relative">
          <TrendingUp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-3 h-3" />
          <select
            value={filters.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors text-xs appearance-none cursor-pointer"
          >
            <option value="">All Experience</option>
            <option value="Entry-level">Entry-level</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;