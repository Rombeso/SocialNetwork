import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";
import SamuraiJSApp from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJSApp/>, div)
  ReactDOM.unmountComponentAtNode(div)

  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
