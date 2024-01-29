import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MainLayout from './components/layouts/MainLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import { queryClient } from './queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <DashboardPage />
      </MainLayout>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
