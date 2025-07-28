import React, { useState } from 'react';
import { X, Upload, FileText, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Job } from '@/types/Job';

interface ApplicationModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null
  });

  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission here
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (file: File) => {
    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for Position</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">{job.title} at {job.company}</p>
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
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Resume *
            </label>
            <div
              className={`relative border-2 border-dashed rounded-xl p-6 transition-all duration-200 ${
                dragActive 
                  ? 'border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : formData.resume 
                    ? 'border-green-400 dark:border-green-500 bg-green-50 dark:bg-green-900/20' 
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required={!formData.resume}
              />
              
              <div className="text-center">
                {formData.resume ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FileText className="w-8 h-8 text-green-500 dark:text-green-400" />
                    <div>
                      <p className="text-sm font-medium text-green-700 dark:text-green-300">{formData.resume.name}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">Click to replace or drag a new file</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Drop your resume here or click to browse
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">PDF files only, max 10MB</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cover Letter *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <textarea
                required
                rows={6}
                value={formData.coverLetter}
                onChange={(e) => handleChange('coverLetter', e.target.value)}
                placeholder="Tell us why you're the perfect fit for this position. Highlight your relevant experience, skills, and passion for fitness..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {formData.coverLetter.length}/1000 characters
            </p>
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
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;