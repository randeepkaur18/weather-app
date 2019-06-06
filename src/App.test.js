import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './components/Layout/Layout';

it('render <Layout> component without crashing', () => {
  const appWrapper = shallow(<App />);
  expect(appWrapper.contains(<Layout />)).toBe(true);
});