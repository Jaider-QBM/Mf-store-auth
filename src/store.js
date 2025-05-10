import { configureStore } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import Cookies from 'js-cookie';
import { combineReducers } from 'redux';
import { loginSuccess } from './slices/userSlice'; 
import userReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// Auto-login desde cookies/localStorage
const token = localStorage.getItem('authToken');
const userCookie = Cookies.get('user'); 

if (token && userCookie) {
  try {
    const user = JSON.parse(userCookie);
    store.dispatch(loginSuccess({
      user,
      token,
    }));
  } catch (e) {
    console.error('Error leyendo cookies', e);
  }
}

export { store, persistor };
