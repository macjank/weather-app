import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import { queryClient } from './queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardPage />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
