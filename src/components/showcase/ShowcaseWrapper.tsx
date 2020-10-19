import styled from '@emotion/styled';
import { breakpoints } from '~/styles/variables';

const ShowcaseWrapper = styled('div')`
  padding: 72px 16px;

  @media screen and (min-width: ${breakpoints.md}px) {
    padding: 128px 16px;
  }
`;

export default ShowcaseWrapper;
