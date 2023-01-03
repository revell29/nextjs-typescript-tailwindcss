import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/globals.css';
import '@/styles/colors.css';

const queryClient = new QueryClient();

/**
 * ? `Layout` component is called in every page using `np` snippets.
 * If you have consistent layout across all page, you can add it here too
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
