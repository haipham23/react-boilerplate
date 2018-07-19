import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configuredMockStore from 'redux-mock-store';

import { TestProvider } from '../../utils/test.utils';

import NotFound from './NotFound';

describe('NotFound component', () => {
  it('should display', () => {
    const store = configuredMockStore()({});
    const wrapper = mount(
      <TestProvider store={store}>
        <NotFound />
      </TestProvider>
    );

    expect(wrapper.find(NotFound)).to.have.length(1);
  });
});
