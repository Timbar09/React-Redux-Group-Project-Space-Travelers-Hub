import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import Rocket from '../components/Rocket';

const mockStore = configureStore([]);

describe('Rocket Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rocketList: [
          {
            id: '1',
            name: 'Rocket 1',
            isReserved: false,
            description: 'Description 1',
            images: [
              'https://www.example.com/rocket1.jpg',
              'https://www.example.com/rocket1.jpg',
            ],
            boosters: 1,
            diameter: 1,
            costPerLaunch: 1,
            successRate: 25,
          },
          {
            id: '2',
            name: 'Rocket 2',
            isReserved: true,
            description: 'Description 2',
            images: [
              'https://www.example.com/rocket2.jpg',
              'https://www.example.com/rocket2.jpg',
            ],
            boosters: 2,
            diameter: 2,
            costPerLaunch: 2,
            successRate: 50,
          },
        ],
      },
    });
  });

  test('renders Rocket component with rocket list', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Featured Rockets')).toBeInTheDocument();
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
  });

  test('reserves a rocket when a rocket card is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket />
        </BrowserRouter>
      </Provider>,
    );

    const rocketCard = screen.getByText('Rocket 1');
    fireEvent.click(rocketCard);

    expect(screen.getByText('Reserved')).toBeInTheDocument();
  });

  test('opens cancel reservation confirmation modal when a reserved rocket card is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket />
        </BrowserRouter>
      </Provider>,
    );

    const rocketCard = screen.getByText('Rocket 2');
    fireEvent.click(rocketCard);

    expect(
      screen.getByText('Are you sure you want to cancel this reservation?'),
    ).toBeInTheDocument();
  });

  test('should render a snapshot of the Rocket component', () => {
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket />
        </BrowserRouter>
      </Provider>,
    );

    expect(rockets).toMatchSnapshot();
  });
});
