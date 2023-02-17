import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Alert {
  message: string;
  type: string;
}

export interface AlertsState {
  alerts: Alert[] | [];
}

const initialState: AlertsState = {
  alerts: []
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    createAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts = [...state.alerts, action.payload];
    },
    deleteAlert: (state) => {
      state.alerts = state.alerts.slice(1);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase('announcements/updateAnnouncement/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'Announcement updated', type: 'success' }];
      })
      .addCase('announcements/updateAnnouncement/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('announcements/createAnnouncement/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'Announcement created', type: 'success' }];
      })
      .addCase('announcements/createAnnouncement/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('announcements/deleteAnnouncement/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'Announcement deleted', type: 'success' }];
      })
      .addCase('announcements/deleteAnnouncement/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('events/updateEvent/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'Event updated', type: 'success' }];
      })
      .addCase('events/updateEvent/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('events/createEvent/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'Event created', type: 'success' }];
      })
      .addCase('events/createEvent/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('events/deleteEvent/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'Event deleted', type: 'success' }];
      })
      .addCase('events/deleteEvent/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('users/updateUser/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'User updated', type: 'success' }];
      })
      .addCase('users/updateUser/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('users/createUser/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'User created', type: 'success' }];
      })
      .addCase('users/createUser/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      })
      .addCase('users/deleteUser/fulfilled', (state) => {
        state.alerts = [...state.alerts, { message: 'User deleted', type: 'success' }];
      })
      .addCase('users/deleteUser/rejected', (state, action) => {
        state.alerts = [...state.alerts, { message: 'Something went wrong.', type: 'error' }];
      });
  }
});

export const { createAlert, deleteAlert } = alertsSlice.actions;

export const selectAlerts = (state: RootState) => state.alerts.alerts;

export default alertsSlice.reducer;
