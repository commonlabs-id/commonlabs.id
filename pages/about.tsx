import * as React from 'react';
import styled from '@emotion/styled';
import { LayoutRoot, Page } from 'components/layout';
import { colors } from 'styles/variables';

const Paragraph = styled('p')`
  margin-top: 0;
  font-size: 16px;
  line-height: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: ${colors.foreground};
    text-decoration: none;
    border-bottom: 2px solid ${colors.foreground};
    border-top: 2px solid transparent;

    &:hover {
      background-color: ${colors.foreground};
      color: ${colors.background};
      border-top-color: ${colors.foreground};
    }
  }
`;

export default function IndexPage() {
  return (
    <LayoutRoot pageTitle="Tentang | commonlabs ID">
      <Page title="Tentang commonlabs">
        <Paragraph>
          We&apos;re an Indonesian-based open-source collective, created to solve local problems
          with performant, accessible tech.
        </Paragraph>
      </Page>
    </LayoutRoot>
  );
}
