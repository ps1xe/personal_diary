import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './redux/reducers/rootReducer';
import { rootSagaWatcher } from './redux/saga/rootSaga';
import "./App.css";
import App from './App';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(rootSagaWatcher);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
