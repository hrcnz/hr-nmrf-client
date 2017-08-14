import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import Icon from 'components/Icon';
import Button from 'components/buttons/Button';

const Styled = styled(Button)`
  position: absolute;
  right:0;
  top:0;
  &:hover {
    color: ${palette('primary', 1)};
  }
`;

const Close = (props) => (
  <Styled onClick={props.onCancel} >
    <Icon name="close" />
  </Styled>
);

Close.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default Close;