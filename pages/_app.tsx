import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { RelayEnvironmentProvider } from 'react-relay';
import { InitialRecords, useEnvironment } from '../relay/relayEnvironment';

interface Page {
  initialRecords: InitialRecords;
}

function MyApp({ Component, pageProps }: AppProps<Page>) {
  const relayEnvironment = useEnvironment(pageProps.initialRecords);
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
