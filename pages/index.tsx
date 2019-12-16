import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { colors, breakpoints } from 'styles/variables';
import HeroWrapper from 'components/hero/HeroWrapper';
import { LayoutRoot, Container } from 'components/layout';

const Anchor = styled('a')`
  color: ${colors.foreground};
  text-decoration: none;
  border-bottom: 2px solid ${colors.foreground};
  border-top: 2px solid transparent;

  &:hover,
  &:focus {
    background-color: ${colors.foreground};
    color: ${colors.background};
    border-top-color: ${colors.foreground};
  }
`;

const HeroTitles = styled('div')`
  margin-bottom: 24px;
`;

const HeroSocials = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 18px;
  line-height: 26px;

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const HeroSocialItem = styled('li')`
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 1rem;

    &:before {
      margin-right: 1rem;
      content: '·';
    }
  }
`;

const HeroBlock = styled('div')`
  text-align: center;

  @media screen and (min-width: ${breakpoints.lg}px) {
    text-align: left;
  }
`;

const H1 = styled('h1')`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 16px;
  color: ${colors.foreground};
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  border-bottom: 6px solid ${colors.foreground};

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 56px;
  }
`;

const Subheading = styled('p')`
  margin: 0;
  color: ${colors.foreground};
  font-size: 24px;
  line-height: 32px;

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 32px;
    line-height: 40px;
  }

  span {
    border-radius: 0.5em 0 0.5em 0;
    background-image: linear-gradient(
      -100deg,
      ${transparentize(0.7, colors.highlight04)},
      ${transparentize(0.3, colors.highlight04)} 95%,
      ${transparentize(0.9, colors.highlight04)}
    );
  }
`;

export default function IndexPage() {
  return (
    <LayoutRoot pageTitle="commonlabs ID" isHomepage>
      <HeroWrapper>
        <Container size="xl">
          <HeroBlock>
            <HeroTitles>
              <H1>commonlabs</H1>
              <Subheading>
                Open Source untuk <span>Kebaikan</span>.
              </Subheading>
            </HeroTitles>
            <HeroSocials>
              <HeroSocialItem>
                <Anchor
                  href="https://twitter.com/commonlabsID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter
                </Anchor>
              </HeroSocialItem>
              <HeroSocialItem>
                <Anchor
                  href="https://github.com/commonlabs-id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </Anchor>
              </HeroSocialItem>
            </HeroSocials>
          </HeroBlock>
        </Container>
      </HeroWrapper>
    </LayoutRoot>
  );
}
