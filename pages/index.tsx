import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { colors, breakpoints } from 'styles/variables';
import { HeroWrapper, HeroBlock, HeroTitles } from 'components/hero';
import { LayoutRoot, Container } from 'components/layout';
import { ShowcaseWrapper, ProjectShowcase } from 'components/showcase';
import { Transition } from 'react-transition-group';

import projects from 'data/projects.json';
import useVerticalScroll from 'utils/use-vertical-scroll';

const FADE_DURATION = 300;

const defaultStyle = {
  transition: `opacity ${FADE_DURATION}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

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

const HeroSocials = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 16px;
  line-height: 24px;

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

const Logo = styled('img')`
  display: inline-block;
  max-width: 100%;
  height: 100%;
  max-height: 48px;

  @media screen and (min-width: ${breakpoints.md}px) {
    max-height: 72px;
  }
`;

const Subheading = styled('p')`
  margin: 0;
  margin-top: 16px;
  color: ${colors.foreground};
  font-size: 20px;
  line-height: 28px;

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

interface ScrollDownWrapperProps {
  hidden?: boolean;
}

const ScrollDownWrapper = styled('div')<ScrollDownWrapperProps>`
  position: fixed;
  bottom: 16px;
  width: 100%;
  max-width: calc(100% - 32px);
  text-align: center;
`;

const ScrollDownText = styled('p')`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
`;

export default function IndexPage() {
  const hasReachedThreshold = useVerticalScroll(100);

  return (
    <LayoutRoot pageTitle="commonlabs ID" isHomepage>
      <HeroWrapper>
        <Container size="xl">
          <HeroBlock>
            <HeroTitles>
              <Logo alt="commonlabs" src="/static/images/WordmarkDark.svg" />
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
        <Transition in={!hasReachedThreshold} timeout={FADE_DURATION}>
          {state => (
            <ScrollDownWrapper
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <ScrollDownText>
                <a href="#projects">scroll ke bawah</a>
              </ScrollDownText>
            </ScrollDownWrapper>
          )}
        </Transition>
      </HeroWrapper>
      <section id="projects">
        {projects.map((project, i) => (
          <ShowcaseWrapper key={project.title}>
            <Container size="xl">
              <ProjectShowcase
                reverse={i % 2 === 0}
                highlightColor={i % 2 === 0 ? colors.highlight02 : colors.highlight03}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectLink={project.projectLink}
              />
            </Container>
          </ShowcaseWrapper>
        ))}
      </section>
    </LayoutRoot>
  );
}
