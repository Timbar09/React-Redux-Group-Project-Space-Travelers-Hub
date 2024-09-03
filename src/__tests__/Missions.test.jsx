import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Mission from '../components/Mission';
// import store from '../redux/store';

const mockStore = configureStore([]);

describe('Mission Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
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
        ],
      },
    });
  });

  test('renders Mission component with mission list', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    expect(screen.getByText('Featured Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
  });

  test('opens waiver modal when a mission card is clicked', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const missionCard = screen.getByText('Mission 1');
    fireEvent.click(missionCard);

    expect(screen.getByText('Waiver of Liability')).toBeInTheDocument();
  });

  test('opens leave mission modal when a mission card is clicked', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const missionCard = screen.getByText('Mission 2');
    fireEvent.click(missionCard);

    expect(screen.getByText('Leave this mission')).toBeInTheDocument();
  });

  test('should render Missions', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Mission />
        </BrowserRouter>
      </Provider>,
    );

    expect(missions).toMatchSnapshot();
  });
});
