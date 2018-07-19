import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configuredMockStore from 'redux-mock-store';

import { TestProvider } from '../../utils/test.utils';

import Header from './Header';

describe('Header component', () => {
  it('should display', () => {
    const store = configuredMockStore()({});
    const wrapper = mount(
      <TestProvider store={store}>
        <Header />
      </TestProvider>
    );

    expect(wrapper.find(Header)).to.have.length(1);
  });
});
