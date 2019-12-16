import * as React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { baseUrl } = publicRuntimeConfig;

export interface SEOProps {
  isHomepage?: boolean;
  pageTitle?: string;
  description?: string;
}

const SEOTags: React.FC<SEOProps> = ({ isHomepage, pageTitle, description }) => {
  const router = useRouter();

  const getPageTitle = () => {
    if (pageTitle && !isHomepage) {
      return `${pageTitle} | commonlabs ID`;
    }

    if (description) {
      return `commonlabs ID | ${description}`;
    }

    return 'commonlabs ID';
  };

  return (
    <Head>
      <title>{getPageTitle()}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content="commonlabs ID" />
      <meta property="og:title" content={pageTitle && !isHomepage ? pageTitle : 'Home'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${router ? router.pathname : '/'}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/opengraph-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="commonlabs ID" />
      <meta name="twitter:creator" content="@commonlabsID" />
      <meta name="twitter:title" content={pageTitle && !isHomepage ? pageTitle : 'Home'} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/opengraph-image.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

SEOTags.defaultProps = {
  isHomepage: false,
  pageTitle: undefined,
  description: 'Open Source untuk Kebaikan.',
};

SEOTags.displayName = 'LayoutRoot';

export default SEOTags;
