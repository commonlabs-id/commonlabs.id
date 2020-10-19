import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { breakpoints } from '~/styles/variables';

import Container from './Container';

const PageRoot = styled('section')`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 3rem;
`;

const HeaderRoot = styled('header')`
  margin-bottom: 3rem;
`;

const Logo = styled('img')`
  display: inline-block;
  max-width: 100%;
  height: 100%;
  max-height: 36px;

  @media screen and (min-width: ${breakpoints.md}px) {
    max-height: 48px;
  }
`;

const PageTitle = styled('h1')`
  margin: 0;
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <PageRoot>
    <HeaderRoot>
      <Container>
        <Link href="/">
          <a>
            <Logo alt="commonlabs" src="/static/images/WordmarkDark.svg" />
          </a>
        </Link>
      </Container>
    </HeaderRoot>
    <Container>
      <PageTitle>{title}</PageTitle>
      {children}
    </Container>
  </PageRoot>
);

export default Page;
