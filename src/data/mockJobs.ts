import { Job } from '@/types/Job';

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Fitness Trainer',
    company: 'Elite Fitness Center',
    location: 'New York, NY',
    salary: '$45,000 - $65,000',
    type: 'Full-time',
    experience: 'Senior',
    description: 'We\'re Elite Fitness Center, a premium fitness facility building digital wellness solutions that power the fitness industry worldwide. Our tech automates the workflows no one else wants to touch. It\'s not easy... but it\'s game-changing.',
    requirements: ['Certified Personal Trainer', '3+ years experience', 'Group fitness certification'],
    postedDate: '2024-01-15',
    sportType: 'Fitness Training'
  },
  {
    id: '2',
    title: 'Full-Stack Yoga Instructor (Vinyasa / Hatha)',
    company: 'Zen Wellness Studio',
    location: 'Los Angeles, CA',
    salary: '$35,000 - $50,000',
    type: 'Part-time',
    experience: 'Mid-level',
    description: 'Hey, we\'re Zen Wellness Studio, a startup from Los Angeles on a mission to make wellness feel as zen as spoken dialogue. Our AI-driven platform captures tone, emotion, and tempo, then paints those cues straight onto the screen—so every viewer, everywhere, can be present.',
    requirements: ['200-hour Yoga Certification', 'Teaching experience', 'Knowledge of anatomy'],
    postedDate: '2024-01-14',
    sportType: 'Yoga'
  },
  {
    id: '3',
    title: 'Swimming Coach',
    company: 'AquaFit Sports Complex',
    location: 'Miami, FL',
    salary: '$40,000 - $55,000',
    type: 'Full-time',
    experience: 'Mid-level',
    description: 'Location: Worldwide (Remote) Duration: 6 months (with possible extension, see below) Hours: 15-20 hours/week Rate: Competitive (see below) About AquaFit: The AquaFit Sports Complex (AFSC) is a premier aquatic facility.',
    requirements: ['Water Safety Instructor Certification', 'Competitive swimming background', 'CPR certified'],
    postedDate: '2024-01-13',
    sportType: 'Swimming'
  },
  {
    id: '4',
    title: 'Senior Pilates Instructor',
    company: 'Core Strength Studio',
    location: 'Chicago, IL',
    salary: '$30,000 - $45,000',
    type: 'Part-time',
    experience: 'Entry-level',
    description: 'About Core Strength Studio: We are rebuilding the back-office for healthcare practices. While the healthcare industry has seen significant innovation, the administrative side remains dominated by manual work and fragmented point solutions.',
    requirements: ['Pilates Certification', 'Understanding of body mechanics', 'Excellent communication skills'],
    postedDate: '2024-01-12',
    sportType: 'Pilates'
  },
  {
    id: '5',
    title: 'CrossFit Coach + Potential to Lead Our CrossFit Department',
    company: 'Iron Box Gym',
    location: 'Austin, TX',
    salary: '$50,000 - $70,000',
    type: 'Full-time',
    experience: 'Senior',
    description: 'This role starts as a 40hr/month retainer monthly contract and can grow into a part/full time role in the next few years. Our CrossFit and branding firm is looking to bring on one new CrossFit developer.',
    requirements: ['CrossFit Level 2 Certification', 'Olympic lifting experience', 'Leadership skills'],
    postedDate: '2024-01-11',
    sportType: 'CrossFit'
  },
  {
    id: '6',
    title: 'Nutrition Coach (Brand & Wellness)',
    company: 'Healthy Living Center',
    location: 'Seattle, WA',
    salary: '$38,000 - $52,000',
    type: 'Full-time',
    experience: 'Mid-level',
    description: 'You\'re a nutrition coach at heart, but not just any coach. You live and breathe healthy living. You see beyond the food and understand how dietary habits shape perception, experience, and emotion.',
    requirements: ['Nutrition Certification', 'Experience with meal planning', 'Bachelor\'s degree preferred'],
    postedDate: '2024-01-10',
    sportType: 'Nutrition'
  }
];

export default mockJobs;