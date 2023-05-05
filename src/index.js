import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import 'number-brm';
import rootReducer from './page/reducer';
// redux > state management
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ScrollTop from './components/scroll-top/Scrolltop'

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart', 'heart'],
//   blocklist: ['water']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// let store = createStore(persistedReducer)
// let persistor = persistStore(store)


const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      <ScrollTop/>
    {/* </PersistGate> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);