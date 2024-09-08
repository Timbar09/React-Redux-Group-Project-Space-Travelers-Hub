import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import MyProfile from '../components/MyProfile';

const mockStore = configureStore([]);

describe('MyProfile Component', () => {
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
          {
            id: '3',
            name: 'Rocket 3',
            isReserved: true,
            description: 'Description 3',
            images: [
              'https://www.example.com/rocket3.jpg',
              'https://www.example.com/rocket3.jpg',
            ],
            boosters: 3,
            diameter: 3,
            costPerLaunch: 3,
            successRate: 75,
          },
        ],
      },
      missions: {
        missionList: [
          {
            id: '1',
            name: 'Mission 1',
            description: 'Description 1',
            isReserved: false,
            wikipedia: 'https://wikipedia.org/mission1',
            twitter: 'https://twitter.com/mission1',
            website: 'https://mission1.com',
          },
          {
            id: '2',
            name: 'Mission 2',
            description: 'Description 2',
            isReserved: true,
            wikipedia: 'https://wikipedia.org/mission2',
            twitter: 'https://twitter.com/mission2',
            website: 'https://mission2.com',
          },
          {
            id: '3',
            name: 'Mission 3',
            description: 'Description 3',
            isReserved: true,
            wikipedia: 'https://wikipedia.org/mission3',
            twitter: 'https://twitter.com/mission3',
            website: 'https://mission3.com',
          },
        ],
      },
    });
  });

  test('renders MyProfile component with mission list', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.queryByText('Mission 1')).not.toBeInTheDocument();

    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Mission 3')).toBeInTheDocument();
  });

  test('renders MyProfile component with rocket list', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
      </Provider>,
    );

    const rocketsTab = screen.getByText('Reserved Rockets');
    fireEvent.click(rocketsTab);

    expect(screen.queryByText('Rocket 1')).not.toBeInTheDocument();

    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
    expect(screen.getByText('Rocket 3')).toBeInTheDocument();
  });
});
