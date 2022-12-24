import Theme from 'components/theme';
import { GlobalStyles } from 'style/global.styled';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'components/router';
import { Provider } from 'react-redux';
import { setupStore } from 'redux/store';

const store = setupStore();

const App = () => {

  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </Provider>
  );
};

export default App;
