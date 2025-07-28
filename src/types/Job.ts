export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  experience: 'Entry-level' | 'Mid-level' | 'Senior';
  description: string;
  requirements: string[];
  postedDate: string;
  sportType: string;
}