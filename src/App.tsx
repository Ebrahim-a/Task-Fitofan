import { useState} from 'react';
import Header from '@/ui/components/Header';
import SearchFilters from '@/ui/components/SearchFilters';
import JobGrid from '@/ui/components/JobGrid';
import PostJobModal from '@/ui/components/PostJobModal';
import JobDetailModal from '@/ui/components/JobDetailModal';
import { FilterState } from '@/types/FilterState';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { supabase } from '@/lib/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useAuth } from '@/auth/AuthProvider';
import { Job } from '@/types/Job';
import mockJobs from '@/data/mockJobs';


function App() {
  const [jobs] = useState<Job[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    jobType: '',
    experience: '',
  });
  const [showAuth, setShowAuth] = useState(false);

  const { session, signOut } = useAuth();

  const handleSignIn = () => setShowAuth(true);

  const handleFilterChange = (newFilters: FilterState) => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(newFilters.search.toLowerCase());
      const matchesLocation =
        newFilters.location === '' ||
        job.location.toLowerCase().includes(newFilters.location.toLowerCase());
      const matchesJobType =
        newFilters.jobType === '' || job.type === newFilters.jobType;
      const matchesExperience =
        newFilters.experience === '' || job.experience === newFilters.experience;

      return (
        matchesSearch && matchesLocation && matchesJobType && matchesExperience
      );
    });

    setFilters(newFilters);
    setFilteredJobs(filtered);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header
          onPostJob={() => setIsPostModalOpen(true)}
          onSignIn={handleSignIn}
          session={session}
          onLogout={signOut}
        />
        <main className="container mx-auto px-6 py-8 max-w-6xl">
          {!session && showAuth ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google']}
            />
          ) : (
            <>
              <SearchFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
              <JobGrid jobs={filteredJobs} onJobClick={(job) => setSelectedJob(job)} />
              <PostJobModal
                isOpen={isPostModalOpen}
                onClose={() => setIsPostModalOpen(false)}
              />
              <JobDetailModal
                job={selectedJob}
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
              />
            </>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App;