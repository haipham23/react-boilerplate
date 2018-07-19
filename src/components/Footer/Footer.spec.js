import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configuredMockStore from 'redux-mock-store';

import { TestProvider } from '../../utils/test.utils';

import Footer from './Footer';

describe('Footer component', () => {
  it('should display', () => {
    const store = configuredMockStore()({});
    const wrapper = mount(
      <TestProvider store={store}>
        <Footer />
      </TestProvider>
    );

    expect(wrapper.find(Footer)).to.have.length(1);
  });
});
