import * as React from 'react';
import styled from '@emotion/styled';

import global from '~/styles/global';

import SEOTags from './SEOTags';
import Footer from './Footer';

export interface LayoutRootProps {
  isHomepage?: boolean;
  pageTitle?: string;
  description?: string;
}

const Root = styled('main')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const LayoutRoot: React.FC<LayoutRootProps> = ({
  children,
  isHomepage,
  pageTitle,
  description,
}) => (
  <Root>
    <SEOTags isHomepage={isHomepage} pageTitle={pageTitle} description={description} />
    <style jsx global>
      {global}
    </style>
    {children}
    <Footer isHomepage={isHomepage} />
  </Root>
);

LayoutRoot.displayName = 'LayoutRoot';

export default LayoutRoot;
