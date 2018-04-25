import styled from 'styled-components';

import Link from './Link';

export default styled(Link)`
  font-size: 0.8em;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    font-size: 0.9em;
  }
`;
