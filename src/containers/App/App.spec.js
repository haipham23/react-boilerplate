import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configuredMockStore from 'redux-mock-store';

import { TestProvider } from '../../utils/test.utils';

import App from './App';

describe('App component', () => {
  it('should display', () => {
    const store = configuredMockStore()({});
    const wrapper = mount(
      <TestProvider store={store}>
        <App />
      </TestProvider>
    );

    expect(wrapper.find(App)).to.have.length(1);
  });
});
