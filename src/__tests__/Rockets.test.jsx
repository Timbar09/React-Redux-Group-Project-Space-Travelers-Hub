import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Rockets from '../routes/Rockets';
import store from '../redux/store';
import { addReservation, remReservation } from '../redux/Rockets/rocketSlice';

describe('Rockets test', () => {
  test('should render Rockets', () => {
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );

    expect(rockets).toMatchSnapshot();
  });
});

describe('Testing Reservations', () => {
  test('testing Add', () => {
    const init = {
      payload: undefined,
      type: 'Rockets/addReservation',
    };
    const final = addReservation();
    expect(final).toEqual(init);
  });

  test('testing cancel', () => {
    const init = {
      payload: undefined,
      type: 'Rockets/remReservation',
    };
    const final = remReservation();
    expect(final).toEqual(init);
  });
});
