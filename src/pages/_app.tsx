import * as React from 'react';
import { AppProps } from 'next/app';

import 'typeface-inter';
import 'modern-normalize';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
