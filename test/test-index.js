import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';
import List from '../js/components/list';

describe('Board component', function() {
  it('Has correct class name', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Board />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('board');
  })
})
