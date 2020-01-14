import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/variables';

import Container from './Container';

const Root = styled('footer')`
  margin-top: 3rem;
  padding: 16px;
`;

const Paragraph = styled('p')`
  margin: 0;
  font-size: 16px;
  line-height: 24px;

  &:not(:first-of-type) {
    margin-top: 1rem;
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

interface FooterProps {
  isHomepage?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isHomepage }) => {
  return (
    <Root>
      <Container size={isHomepage ? 'xl' : undefined}>
        <Paragraph>
          Some rights reserved (
          <a
            target="_blank"
            rel="license noopener noreferrer"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC-BY-NC-SA 4.0
          </a>
          ). <strong>commonlabs ID</strong>.
        </Paragraph>
      </Container>
    </Root>
  );
};

export default Footer;
