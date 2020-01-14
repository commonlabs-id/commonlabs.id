import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { breakpoints, colors } from 'styles/variables';

interface ReversibleProps {
  reverse?: boolean;
}

const Root = styled('div')<ReversibleProps>`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.md}px) {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }
`;

const ProjectImage = styled('div')`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  max-height: 450px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);

  img {
    display: block;
    height: 100%;
    max-height: 450px;
    max-width: 100%;
  }
`;

const ProjectDescription = styled('div')<ReversibleProps>`
  display: block;
  width: 100%;
  margin-top: 24px;

  @media screen and (min-width: ${breakpoints.md}px) {
    max-width: 400px;
    margin-top: 0;
    ${props => (props.reverse ? 'margin-right: 24px;' : 'margin-left: 24px;')}
  }
`;

interface HighlightProps {
  highlightColor: string;
}

const ProjectTitle = styled('h2')<HighlightProps>`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 40px;
    line-height: 48px;
  }

  span {
    border-radius: 0.5em 0 0.5em 0;
    background-image: linear-gradient(
      -100deg,
      ${props => transparentize(0.7, props.highlightColor)},
      ${props => transparentize(0.3, props.highlightColor)} 95%,
      ${props => transparentize(0.9, props.highlightColor)}
    );
  }
`;

const Paragraph = styled('p')`
  margin: 0;
  margin-top: 24px;
  font-size: 16px;
  line-height: 24px;
`;

const ProjectCTA = styled('a')`
  display: inline-block;
  margin: 0;
  margin-top: 24px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 48px;
  height: 48px;
  min-width: 250px;
  text-align: center;

  background-color: ${colors.foreground};
  color: ${colors.background};
  border: 1px solid transparent;
  border-radius: 8px;
  transition: 0.3s all ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    border-color: ${colors.foreground};
    color: ${colors.foreground};
  }
`;

interface ProjectShowcaseProps extends ReversibleProps, Partial<HighlightProps> {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  description,
  imageUrl,
  projectLink,
  reverse = false,
  highlightColor = colors.highlight04,
}) => {
  return (
    <Root reverse={reverse}>
      <ProjectImage>
        <img src={imageUrl} alt={title} />
      </ProjectImage>
      <ProjectDescription reverse={reverse}>
        <ProjectTitle highlightColor={highlightColor}>
          <span>{title}</span>
        </ProjectTitle>
        <Paragraph>{description}</Paragraph>
        <ProjectCTA href={projectLink} target="_blank" rel="noopener noreferrer">
          Kunjungi Proyek
        </ProjectCTA>
      </ProjectDescription>
    </Root>
  );
};

export default ProjectShowcase;
