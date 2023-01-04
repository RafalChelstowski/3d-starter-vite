/* eslint-disable react/jsx-no-useless-fragment */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext } from 'react';
import { Home } from './screens/Home';

const queryClient = new QueryClient();

export const QueryClientContext = createContext<QueryClient | undefined>(queryClient);

export function App() {
  return (
    <QueryClientProvider client={queryClient} context={QueryClientContext}>
      <Home />
    </QueryClientProvider>
  );
}
