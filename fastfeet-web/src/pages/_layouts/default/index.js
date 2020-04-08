import React from 'react';
import Proptypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function DefaultLayout( {children}) {
  return (
    <Wrapper><Header />{children}</Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: Proptypes.element.isRequired,
}
