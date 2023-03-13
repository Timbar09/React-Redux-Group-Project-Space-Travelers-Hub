import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Navbar tests', () => {
  test('should render Navbar', () => {
    const header = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});
