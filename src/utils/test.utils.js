/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';

/**
 * Test Provider
 *
 * Use as a provider on unit test
 * in components. Working with containers
 * require a store provider and MUI provider.
 *
 * @param {any} { component } - react elem
 * @returns react provider elem with supplied component
 */
export function TestProvider({ children, store }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
