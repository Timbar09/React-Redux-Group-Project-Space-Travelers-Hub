import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from '../routes/Missions';
import store from '../redux/store';

describe('Missions test', () => {
  test('should render Missions', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );

    expect(missions).toMatchSnapshot();
  });
});
