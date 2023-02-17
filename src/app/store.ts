import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice';
import filtersReducer from '../features/filters/filtersSlice';
import announcementsReducer from '../features/announcements/announcementsSlice';
import eventsReducer from '../features/events/eventsSlice';
import alertsReducer from '../features/alerts/alertsSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  users: usersReducer,
  filters: filtersReducer,
  announcements: announcementsReducer,
  events: eventsReducer,
  alerts: alertsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
