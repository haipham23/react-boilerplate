import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configuredMockStore from 'redux-mock-store';

import { TestProvider } from '../../utils/test.utils';

import Home from './Home';

describe('Home component', () => {
  it('should display', () => {
    const store = configuredMockStore()({});
    const wrapper = mount(
      <TestProvider store={store}>
        <Home />
      </TestProvider>
    );

    expect(wrapper.find(Home)).to.have.length(1);
  });
});
